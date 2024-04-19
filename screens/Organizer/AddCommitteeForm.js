import * as React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { firebase } from '../../firebaseConfig'
import { Color, FontSize, Border } from "../../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const AddCommitteForm = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;

  const [committeeData, setCommitteeData] = React.useState({
    committeename: "",
    committeeheadname: "",
    email: "",
    password: "",
    headcourse: "",
    phone: "",
  });

  const handleInputChange = (name, value) => {
    setCommitteeData({
      ...committeeData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!committeeData.committeename.trim()) {
      errors.committeename = "Committee name is required";
    }

    if (!committeeData.committeeheadname.trim()) {
      errors.committeeheadname = "Committee head name is required";
    }

    if (!committeeData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(committeeData.email)) {
      errors.email = "Invalid email format";
    }

    if (!committeeData.password.trim()) {
      errors.password = "Password is required";
    } else if (committeeData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (!committeeData.headcourse.trim()) {
      errors.headcourse = "Head course name is required";
    }

    if (!committeeData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!isValidPhoneNumber(committeeData.phone)) {
      errors.phone = "Invalid phone number format";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const generateRandomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';

    for (let i = 0; i < 4; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return code;
  };

  const submitCommitteeForm = async () => {
    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      try {
        const festRef = firebase.firestore().collection('festData').doc(id);

        const code = generateRandomCode();
        
        const festDoc = await festRef.get();

        if (festDoc.exists && festDoc.data().committees) {
          await festRef.update({
            committees: firebase.firestore.FieldValue.arrayUnion({ ...committeeData, code: code }),
          });

          setCommitteeData({
            committeename: "",
            committeeheadname: "",
            email: "",
            password: "",
            headcourse: "",
            phone: "",
          });

          navigation.navigate('AddCommitte', { id });
          Toast.show({
            type: "success",
            text1: "Success",
            text2: "Committee added successfully!",
            visibilityTime: 4000,
          });
        } else {
          await festRef.set({
            committees: firebase.firestore.FieldValue.arrayUnion({ ...committeeData, code: code }),
          }, { merge: true });

          setCommitteeData({
            committeename: "",
            committeeheadname: "",
            email: "",
            password: "",
            headcourse: "",
            phone: "",
          });
          navigation.navigate('AddCommitte', { id });
          Toast.show({
            type: "success",
            text1: "Success",
            text2: "Committee added successfully!",
            visibilityTime: 4000,
          });
        }
      } catch (error) {
        console.error('Error adding committee to fest:', error);
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Failed to add committee. Please try again.",
          visibilityTime: 4000,
        });
      }
    } else {
      console.log("Form has errors:", errors);
      // Handle form errors here, such as displaying them to the user
      Object.values(errors).forEach((error) => {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error,
          visibilityTime: 4000,
        });
      });
    }
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Create Committee</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Committee Name"
        value={committeeData.committeename}
        onChangeText={(text) => handleInputChange('committeename', text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Committee Head"
        value={committeeData.committeeheadname}
        onChangeText={(text) => handleInputChange('committeeheadname', text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Email"
        value={committeeData.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        secureTextEntry
        value={committeeData.password}
        onChangeText={(text) => handleInputChange('password', text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Head Course Name"
        value={committeeData.headcourse}
        onChangeText={(text) => handleInputChange('headcourse', text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Phone No"
        value={committeeData.phone}
        onChangeText={(text) => handleInputChange('phone', text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Submit" color="#000080" onPress={submitCommitteeForm} />
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

export default AddCommitteForm;
