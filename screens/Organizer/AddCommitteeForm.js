import * as React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { Image } from "expo-image";
import { firebase } from '../../firebaseConfig'
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";

const AddCommitteForm = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  console.log(id, "hwllooooaaee333")
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

  const generateRandomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';

    for (let i = 0; i < 4; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return code;
  };

  const submitCommitteeForm = async () => {
    try {
     

      const festRef = firebase.firestore().collection('festData').doc(id);

      const code = generateRandomCode();
      // Get the existing data of the fest document
      const festDoc = await festRef.get();
      console.log(festDoc.data)



      // Check if the 'events' field exists in the document
      if (festDoc.exists && festDoc.data().committees) {
        // Update the fest document with the new event data
        await festRef.update({
          committees: firebase.firestore.FieldValue.arrayUnion({ ...committeeData, code: code }),
        });

        setCommitteeData({
          eventname: "",
          eventheadname: "",
          email: "",
          password: "",
          headcourse: "",
          phone: "",
        });

        navigation.navigate('AddEvent', { id })
        console.log('Event added successfully to fest with ID:', id);
      } else {
        // If 'events' field doesn't exist, create it as an array with the new event data
        await festRef.set({
          committees: firebase.firestore.FieldValue.arrayUnion({ ...committeeData, code: code }),
        }, { merge: true });

        setCommitteeData({
          eventname: "",
          eventheadname: "",
          email: "",
          password: "",
          headcourse: "",
          phone: "",
        });
        navigation.navigate('AddCommitte', { id })
        console.log('Coommittee added successfully to fest with ID:', id);
      }
    } catch (error) {
      console.error('Error adding event to fest:', error);
    }
  };
  return (
    <View style={styles.addcommitteform}>
      <View style={[styles.adminloginChild, styles.rectangleViewShadowBox]}>
        <Text style={[styles.createcommittee]}>Create Committee</Text>
        <View style={styles.field}>

          <TextInput
            style={[styles.inputField, styles.usernameInput]}
            placeholder="Committe Name"
            placeholderTextColor="#c9c9c9"
            value={committeeData.committeename}
            onChangeText={(text) => handleInputChange('committeename', text)}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            style={[styles.inputField, styles.passwordInput]}
            placeholder="Committee Head"
            placeholderTextColor="#c9c9c9"
            secureTextEntry
            value={committeeData.committeehead}
            onChangeText={(text) => handleInputChange('committeehead', text)}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            style={[styles.inputField, styles.passwordInput]}
            placeholder="Email"
            placeholderTextColor="#c9c9c9"
            secureTextEntry
            value={committeeData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            style={[styles.inputField, styles.passwordInput]}
            placeholder="Password"
            placeholderTextColor="#c9c9c9"
            secureTextEntry
            value={committeeData.password}
            onChangeText={(text) => handleInputChange('password', text)}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            style={[styles.inputField, styles.passwordInput]}
            placeholder="Course Name"
            placeholderTextColor="#c9c9c9"
            secureTextEntry
            value={committeeData.headcourse}
            onChangeText={(text) => handleInputChange('headcourse', text)}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            style={[styles.inputField, styles.passwordInput]}
            placeholder="Phone No"
            placeholderTextColor="#c9c9c9"
            secureTextEntry
            value={committeeData.phone}
            onChangeText={(text) => handleInputChange('phone', text)}
          />
        </View>
        <View style={[styles.buttonContainer]}>
          <Button title="Login" color="#000080" style={styles.btn} onPress={submitCommitteeForm}>
            {/* <Text style={styles.loginButtonText}>Login</Text> */}
          </Button>
          {/* <TouchableOpacity style={[styles.loginButton, styles.rectangleViewShadowBox]} onPress={handleLogin}>
        </TouchableOpacity> */}
        </View>
        <View style={[styles.buttonContainer1]}>
          <Button title="Generate code" color="#000080" style={styles.btn}>
            {/* <Text style={styles.loginButtonText}>Login</Text> */}
          </Button>
          {/* <TouchableOpacity style={[styles.loginButton, styles.rectangleViewShadowBox]} onPress={handleLogin}>
        </TouchableOpacity> */}
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_6xl,
    position: "absolute",
    paddingTop: 100
  },

  adminloginPosition: {
    width: 221,
    left: 90,
    position: "absolute",
  },
  loginTypo: {
    height: 75,
    color: Color.colorWhite,
    fontSize: FontSize.size_17xl,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  createcommittee: {
    width: 204,
    left: 80,
    top: -50,
    color: "black",
    fontWeight: 900,
    fontSize: 24,
  },
  adminloginChild: {
    top: 61,
    left: 16,
    backgroundColor: Color.colorWhite,
    width: 358,
    height: 712,
  },
  organizer: {
    top: 243,
    left: 129,
    fontSize: FontSize.size_13xl,
    color: "#100f0f",
    width: 150,
    height: 46,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  adminloginItem: {
    height: 56,
    top: 328,
    width: 221,
    left: 90,
  },
  adminloginInner: {
    height: 49,
    top: 395,
  },
  rectangleView: {
    left: 124,
    backgroundColor: Color.colorDarkslateblue_400,
    width: 155,
    height: 48,
    top: 492,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    width: 120,
    top: 28,
    left: 50,
  },
  field: {
    backgroundColor: "#000080",
    margin: 10
  },
  username: {
    left: 111,
    height: 43,
    width: 193,
    color: Color.colorWhite,
    fontSize: FontSize.size_17xl,
    top: 328,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  password: {
    left: 104,
    width: 193,
    top: 395,
  },
  login: {
    left: 158,
    width: 252,
    top: 492,
  },
  adminlogin: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
  inputField: {
    height: 40,
    borderRadius: Border.br_6xl,
    paddingHorizontal: 10,
    marginBottom: 15,
    top: 40,
  },
  usernameInput: {
    top: 8,
    color: Color.colorWhite,
    placeholderTextColor: Color.colorWhitesmoke

  },
  passwordInput: {
    top: 8,
    color: Color.colorWhite,
  },
  loginButton: {
    backgroundColor: Color.colorDarkslateblue_400,
    width: 155,
    height: 20,
    top: 286,
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#000080",
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.itimRegular,
    height: 100,
  },

  addcommitteform: {
    width: 393,
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslateblue_200,
  },
  buttonContainer1: {
    display: "flex",
    justifyContent: "center",
    width: 120,
    top: -9,
    left: 200,


  },
  btn: {
    width: 510,
  }
});

export default AddCommitteForm;
