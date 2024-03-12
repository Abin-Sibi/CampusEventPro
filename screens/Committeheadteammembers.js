import * as React from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Committeheadteammembers = () => {
  return (
    <View style={styles.committeheadteammembers}>
      <Text style={styles.addMembers}>Add members</Text>
      <Image
        style={styles.peopleIcon}
        contentFit="cover"
        source={require("../assets/People.png")}
      />
      <View style={[styles.adminloginChild, styles.rectangleViewShadowBox]}>
      <Text style={[styles.eventOrganizer]}>Add Members</Text>
        <View style={styles.field}>
     
            
        </View>
        <View style={styles.field}>
            <TextInput
          style={[styles.inputField, styles.passwordInput]}
          placeholder="Name"
          placeholderTextColor="#c9c9c9"
          secureTextEntry
        />
        </View>
        <View style={styles.field}>
            <TextInput
          style={[styles.inputField, styles.passwordInput]}
          placeholder="Email"
          placeholderTextColor="#c9c9c9"
          secureTextEntry
        />
        </View>
        <View style={styles.field}>
            <TextInput
          style={[styles.inputField, styles.passwordInput]}
          placeholder="Password"
          placeholderTextColor="#c9c9c9"
          secureTextEntry
        />
        </View>
        <View style={styles.field}>
            <TextInput
          style={[styles.inputField, styles.passwordInput]}
          placeholder="Course Name"
          placeholderTextColor="#c9c9c9"
          secureTextEntry
        />
        </View>
        <View style={styles.field}>
            <TextInput
          style={[styles.inputField, styles.passwordInput]}
          placeholder="Phone No"
          placeholderTextColor="#c9c9c9"
          secureTextEntry
        />
        </View>
        <View style={[styles.buttonContainer]}>
        <Button  title="Submit" color="#000080" style={styles.btn}>
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
  
  addMembers: {
    top: 45,
    fontSize: FontSize.size_17xl,
    width: 274,
    height: 54,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    left: 29,
    position: "absolute",
  },
  peopleIcon: {
    top: 9,
    left: 283,
    width: 90,
    height: 90,
    position: "absolute",
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
 
  committeheadteammembers: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslateblue_200,
  },
});

export default Committeheadteammembers;
