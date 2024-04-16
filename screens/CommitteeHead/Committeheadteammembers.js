import * as React from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../../GlobalStyles";
import {firebase} from '../../firebaseConfig'; // Assuming you have firebase config imported
import { useNavigation, useRoute } from "@react-navigation/native";

const Committeheadteammembers = () => {
 
  const navigation = useNavigation();
    const route = useRoute();
  const { committeedata } = route.params;
  console.log(committeedata)
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

  const addMember = async () => {
    try {
      const db = firebase.firestore();
      const festRef = db.collection('festData');

      // Get the document snapshot
      const docSnapshot = await festRef.get();

      // Iterate through the documents
      docSnapshot.forEach(doc => {
          const committees = doc.data().committees;

          if (committees && committees.length > 0) {
              // Iterate through the events array
              committees.forEach(committee => {
                  // Check if the event has email and code properties
                  if (committee.email === committeedata.email && committee.code === committeedata.committeecode) {
                      const committeeId = doc.id;
                      const updatedTasks = committee.members ? [...committee.members, { ...memberData}] : [{ ...memberData }]
                      
                      // Update the specific event with the new tasks array
                      festRef.doc(committeeId).update({
                          'committees': committees.map(e => {
                              if (e.email === committeedata.email && e.code === committeedata.committeecode) {
                                  return { ...e, members: updatedTasks };
                              }
                              return e;
                          })
                      });

                      console.log('Task added successfully for event:', committeeId);
                  }
              });
          }
      });
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };

  return (
    <View style={styles.eventheadteammembers}>
      <Text style={[styles.addMembers, styles.submitTypo]}>Add Members</Text>
      <Image
        style={styles.peopleIcon}
        contentFit="cover"
        source={require("../../assets/People.png")}
      />
      <View style={[styles.adminloginChild, styles.rectangleViewShadowBox]}>
        <Text style={[styles.eventOrganizer]}>Add Members</Text>
        <View style={styles.field}>
          <TextInput
            style={[styles.inputField, styles.passwordInput]}
            placeholder="Name"
            placeholderTextColor="#c9c9c9"
            value={memberData.membername}
            onChangeText={(text) => handleInputChange('membername', text)}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            style={[styles.inputField, styles.passwordInput]}
            placeholder="Email"
            placeholderTextColor="#c9c9c9"
            value={memberData.email}
            onChangeText={(text) => handleInputChange('email', text)}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            style={[styles.inputField, styles.passwordInput]}
            placeholder="Password"
            placeholderTextColor="#c9c9c9"
            secureTextEntry
            value={memberData.password}
            onChangeText={(text) => handleInputChange('password', text)}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            style={[styles.inputField, styles.passwordInput]}
            placeholder="Course Name"
            placeholderTextColor="#c9c9c9"
            value={memberData.course}
            onChangeText={(text) => handleInputChange('course', text)}
          />
        </View>
        <View style={styles.field}>
          <TextInput
            style={[styles.inputField, styles.passwordInput]}
            placeholder="Phone No"
            placeholderTextColor="#c9c9c9"
            value={memberData.phone}
            onChangeText={(text) => handleInputChange('phone', text)}
          />
        </View>
        <View style={[styles.buttonContainer]}>
          <Button title="Submit" color="#000080" style={styles.btn} onPress={addMember} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
 
  addMembers: {
    top: 45,
    fontSize: FontSize.size_17xl,
    width: 274,
    height: 54,
    left: 29,
  },
  peopleIcon: {
    top: 9,
    left: 283,
    width: 90,
    height: 90,
    position: "absolute",
  },
  
  eventheadteammembers: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslateblue_200,
  },
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
    paddingTop:100
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
  eventOrganizer:{
    width: 204,
    left: 88,
    top: -50,
    color:"black",
    fontWeight:900,
    fontSize:25,
  },
  adminloginChild: {
    top: 150,
    left: 26,
    backgroundColor: Color.colorWhite,
    width: 358,
    height: 650,
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
  buttonContainer:{
    display:"flex",
    justifyContent:"center",
    width: 120,
    top: 28,
    left: 120,
  },
  field:{
backgroundColor:"#000080",
margin:10
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
    top:40,
  },
  usernameInput: {
    top: 8,
    color:Color.colorWhite,
    placeholderTextColor:Color.colorWhitesmoke
    
  },
  passwordInput: {
    top: 8,
    color:Color.colorWhite,
  },
  loginButton: {
    backgroundColor: Color.colorDarkslateblue_400,
    width: 155,
    height: 20,
    top: 286,
    margin:"auto",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    color: "#000080",
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.itimRegular,
    height:100,
  },
 
  addcommitteform: {
    width: 393,
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslateblue_200,
  },
  
  btn:{
    width:510,
    left:80,
  },
});


export default Committeheadteammembers;
