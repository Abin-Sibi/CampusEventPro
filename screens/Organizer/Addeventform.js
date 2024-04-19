import * as React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { firebase } from "../../firebaseConfig";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const Addeventform = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  const validateForm = () => {
        const errors = {};
    
        // Validate event name
        if (!eventData.eventname.trim()) {
          errors.eventname = "Event name is required";
        }
    
        // Validate event head name
        if (!eventData.eventheadname.trim()) {
          errors.eventheadname = "Event head name is required";
        }
    
        // Validate email
        if (!eventData.email.trim()) {
          errors.email = "Email is required";
        } else if (!isValidEmail(eventData.email)) {
          errors.email = "Invalid email format";
        }
    
        // Validate password
        if (!eventData.password.trim()) {
          errors.password = "Password is required";
        } else if (eventData.password.length < 6) {
          errors.password = "Password must be at least 6 characters long";
        }
    
        // Validate head course name
        if (!eventData.headcourse.trim()) {
          errors.headcourse = "Head course name is required";
        }
    
        // Validate phone number
        if (!eventData.phone.trim()) {
          errors.phone = "Phone number is required";
        } else if (!isValidPhoneNumber(eventData.phone)) {
          errors.phone = "Invalid phone number format";
        }
    
        return errors;
      };
    
      const isValidEmail = (email) => {
        // Implement email validation logic, you can use regex or any other method
        // Example regex for basic email validation:
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
      };
    
      const isValidPhoneNumber = (phone) => {
        // Implement phone number validation logic, you can use regex or any other method
        // Example regex for basic phone number validation:
        const phoneRegex = /^\d{10}$/;
        return phoneRegex.test(phone);
      };
    
      const [eventData, setEventData] = React.useState({
        eventname: "",
        eventheadname: "",
        email: "",
        password: "",
        headcourse: "",
        phone: "",
      });
    
      const handleInputChange = (name, value) => {
        setEventData({
          ...eventData,
          [name]: value,
        });
      };
    
      const generateRandomCode = () => {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let code = "";
    
        for (let i = 0; i < 4; i++) {
          code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    
        return code;
      };
    
      const submitEventForm = async () => {
        const errors = validateForm();
        console.log("ttttttt")
        if (Object.keys(errors).length === 0) {
          // Form is valid, proceed with submission
          console.log("ttttttt")
          try {
            const festRef = firebase.firestore().collection("festData").doc(id);
    
            const code = generateRandomCode();
            // Get the existing data of the fest document
            const festDoc = await festRef.get();
            console.log(festDoc.data);
    
            // Check if the 'events' field exists in the document
            if (festDoc.exists && festDoc.data().events) {
              // Update the fest document with the new event data
              await festRef.update({
                events: firebase.firestore.FieldValue.arrayUnion({ ...eventData, code: code }),
              });
    
              setEventData({
                eventname: "",
                eventheadname: "",
                email: "",
                password: "",
                headcourse: "",
                phone: "",
              });
    
              navigation.navigate("AddEvent", { id });
              console.log("Event added successfully to fest with ID:", id);
            } else {
              // If 'events' field doesn't exist, create it as an array with the new event data
              await festRef.set(
                {
                  events: firebase.firestore.FieldValue.arrayUnion({ ...eventData, code: code }),
                },
                { merge: true }
              );
    
              setEventData({
                eventname: "",
                eventheadname: "",
                email: "",
                password: "",
                headcourse: "",
                phone: "",
              });
              navigation.navigate("AddEvent", { id });
              console.log("Event added successfully to fest with ID:", id);
            }
          } catch (error) {
            console.error("Error adding event to fest:", error);
          }
        } else {
          // Form has errors, display them as toast messages
          console.log("ttttttt")
          Object.values(errors).forEach((error) => {
            console.log("ttttttt")
            Toast.show({
              type: "error",
              text1: "Error",
              text2: error,
              visibilityTime: 4000,
              // autoHide: true,
              topOffset: 30,
              bottomOffset: 40,
            });
          });
        }
      };

  // Validate and submit form logic remains the same...

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Event</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Event Name"
        value={eventData.eventname}
        onChangeText={(text) => handleInputChange("eventname", text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Event Head"
        value={eventData.eventheadname}
        onChangeText={(text) => handleInputChange("eventheadname", text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Email"
        value={eventData.email}
        onChangeText={(text) => handleInputChange("email", text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        secureTextEntry
        value={eventData.password}
        onChangeText={(text) => handleInputChange("password", text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Head Course Name"
        value={eventData.headcourse}
        onChangeText={(text) => handleInputChange("headcourse", text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Phone No"
        value={eventData.phone}
        onChangeText={(text) => handleInputChange("phone", text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit" color="#000080" onPress={submitEventForm} />
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Color.colorWhite,
    padding: 20,
  },
  title: {
    fontSize: FontSize.size_5xl,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  inputField: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: Border.br_6xl,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 10,
  },
});

export default Addeventform;
