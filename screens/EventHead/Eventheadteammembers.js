import * as React from "react";
import { Text, StyleSheet, View, Button, TextInput, Alert } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import {firebase} from '../../firebaseConfig'; // Assuming you have firebase config imported
import { useNavigation, useRoute } from "@react-navigation/native";

const Eventheadteammembers = () => {

  const navigation = useNavigation();
    const route = useRoute();
  const { eventdata } = route.params;
  console.log(eventdata)
  const [memberData, setMemberData] = React.useState({
    membername: "",
    email: "",
    password: "",
    course: "",
    phone: "",
  });

  const handleInputChange = (name, value) => {
    setMemberData({
      ...memberData,
      [name]: value
    });
  };

  const validateInputs = () => {
    if (!memberData.membername.trim() || !memberData.email.trim() || !memberData.password.trim() || !memberData.course.trim() || !memberData.phone.trim()) {
      Alert.alert("All fields are required.");
      return false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(memberData.email)) {
      Alert.alert("Please enter a valid email address.");
      return false;
    }

    // Phone number validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(memberData.phone)) {
      Alert.alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    return true;
  };

  const addMember = async () => {
    if (!validateInputs()) {
      return;
    }

    try {
      const db = firebase.firestore();
      const festRef = db.collection('festData');

      // Get the document snapshot
      const docSnapshot = await festRef.get();

      // Iterate through the documents
      docSnapshot.forEach(doc => {
          const events = doc.data().events;

          if (events && events.length > 0) {
              // Iterate through the events array
              events.forEach(event => {
                  // Check if the event has email and code properties
                  if (event.email === eventdata.email && event.code === eventdata.eventcode) {
                      const eventId = doc.id;
                      const updatedTasks = event.members ? [...event.members, { ...memberData}] : [{ ...memberData }]
                      
                      // Update the specific event with the new tasks array
                      festRef.doc(eventId).update({
                          'events': events.map(e => {
                              if (e.email === eventdata.email && e.code === eventdata.eventcode) {
                                  return { ...e, members: updatedTasks };
                              }
                              return e;
                          })
                      });

                      console.log('Task added successfully for event:', eventId);
                  }
              });
          }
      });
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.container2}>
      <Text style={styles.title}>Add Member</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        placeholder="Name"
        value={memberData.membername}
        onChangeText={(text) => handleInputChange('membername', text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Email"
        keyboardType="email-address"
        value={memberData.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        secureTextEntry
        value={memberData.password}
        onChangeText={(text) => handleInputChange('password', text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Course Name"
        value={memberData.course}
        onChangeText={(text) => handleInputChange('course', text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Phone No"
        keyboardType="phone-pad"
        value={memberData.phone}
        onChangeText={(text) => handleInputChange('phone', text)}
      />
      <Button title="Submit" color="#000080" onPress={addMember} />
    </View>
    </View>
    
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: Color.colorDarkslateblue_200,
},
container2:{
backgroundColor:'white',
flex: 1,
justifyContent: "center",
alignItems: "center",
marginTop:120,
marginBottom:100,
margin:30,
borderRadius:10

},
title: {
  fontSize: FontSize.size_17xl,
  marginBottom: 20,
  fontFamily: FontFamily.irishGroverRegular,
},
inputContainer: {
  width: "80%",
},
inputField: {
  height: 40,
  borderColor: Color.colorBlack,
  borderWidth: 1,
  borderRadius: Border.br_6xl,
  paddingHorizontal: 10,
  marginBottom: 15,
},
});

export default Eventheadteammembers;
