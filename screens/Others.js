import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { firebase } from '../firebaseConfig'; // Import Firebase configuration

const Others = () => {
  const navigation = useNavigation();

  // State variables to store form data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("Committeeheadpage");
  const [userCode, setUserCode] = useState("");

  const handleDropdownChange = (itemValue) => {
    setSelectedOption(itemValue);
  };

  const Login = async () =>{
    console.log("herwrwe12344")
              switch (selectedOption) {
                case 'Committeeheadpage':
                  navigation.navigate('Committeeheadpage');
                  break;
                case 'Eventtheadpage':
                  EventHeadLogin();
                  break;
                case 'Committeememberspage':
                  navigation.navigate('Committeememberspage');
                  break;
                case 'Eventmemberspage':
                 EventMemberLogin();
                  break;
                default:
                  break;
              }
  }

  const EventMemberLogin = async ()=>{
    try {
      const db = firebase.firestore();
            const festRef = db.collection('festData');

            // Get the document snapshot
            const docSnapshot = await festRef.get();


            // Iterate through the documents
            docSnapshot.forEach(doc => {
                const events = doc.data().events;

                if (events && events.length > 0) {
                    events.forEach(event => {
                        if (event.members && event.members.length > 0 && event.code === userCode) {
                            event.members.forEach(member => {
                               if(member.email === username && member.password === password){
                                navigation.navigate('Eventmemberspage',{taskData:{email:member.email,code:userCode}});
                               }
                            });
                        }
                    });
                }
            });

    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  const EventHeadLogin = async () => {
    try {

      const festRef = firebase.firestore().collection('festData');
      const snapshot = await festRef.get();
      console.log(snapshot.docs, "this is the docs");
  
      snapshot.forEach(doc => {
        const events = doc.data().events;
  
        // Check if events array is defined
        if (events) {
          // Check if the username, password, and user code match any event
          events.forEach(event => {
            console.log("herwrwe12344",event.email,event.password,event.code,"woqqqq",username,password,userCode)
            if (
              event.email === username &&
              event.password === password &&
              event.code === userCode
              
            ) {
              // Perform navigation based on the selected option
              console.log("herwrwe12344")
              switch (selectedOption) {
                case 'Committeeheadpage':
                  navigation.navigate('Committeeheadpage');
                  break;
                case 'Eventtheadpage':
                  navigation.navigate('Eventtheadpage',{eventdata:{eventcode:event.code,email:event.email}});
                  break;
                case 'Committeememberspage':
                  navigation.navigate('Committeememberspage');
                  break;
                default:
                  break;
              }
            }
          });
        }
      });
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.field}>
          <TextInput
            style={styles.inputField}
            placeholder="Username"
            placeholderTextColor="#c9c9c9"
            onChangeText={text => setUsername(text)}
          />
        </View>

        <View style={styles.field}>
          <TextInput
            style={styles.inputField}
            placeholder="Password"
            placeholderTextColor="#c9c9c9"
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
        </View>

        <View style={styles.field}>
          <Picker
            selectedValue={selectedOption}
            style={styles.dropdownInput}
            onValueChange={(itemValue) => handleDropdownChange(itemValue)}
          >
            <Picker.Item label="Committee Head" value="Committeeheadpage" />
            <Picker.Item label="Event Head" value="Eventtheadpage" />
            <Picker.Item label="Committee Member" value="Committeememberspage" />
            <Picker.Item label="Event Member" value="Eventmemberspage" />
          </Picker>
        </View>

        <View style={styles.field}>
          <TextInput
            style={styles.inputField}
            placeholder="User Code"
            placeholderTextColor="#c9c9c9"
            secureTextEntry
            onChangeText={text => setUserCode(text)}
          />
        </View>

        <View style={styles.buttonContainer}>
            <Button onPress={Login} title="LOGIN" color="#000080" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorDarkslateblue_200,
    padding: 16,
  },
  formContainer: {
    top: 150,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_6xl,
    padding: 16,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  title: {
    fontSize: FontSize.size_17xl,
    fontWeight: "bold",
    left: 120,
    marginBottom: 16,
  },
  field: {
    backgroundColor: "#000080",
    height: 60,
    marginVertical: 10,
  },
  inputField: {
    height: 40,
    borderRadius: Border.br_6xl,
    paddingHorizontal: 10,
    color: Color.colorWhite,
  },
  dropdownInput: {
    backgroundColor: "#000080",
    borderRadius: Border.br_6xl,
    color: Color.colorWhite,
  },
  buttonContainer: {
    justifyContent: "center",
    width: "50%",
    alignSelf: "center",
    marginVertical: 10,
  },
});

export default Others;
