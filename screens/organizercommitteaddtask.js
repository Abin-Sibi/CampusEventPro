import * as React from "react";
import { Text, StyleSheet, View, Button, TextInput } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Organizercommitteaddtask = () => {
  return (
    <View style={styles.organizercommitteaddtask}>
      <Text style={styles.assignTask}>Assign Task</Text>
      <Image
        style={styles.tasklistIcon}
        contentFit="cover"
        source={require("../assets/Tasklist-1.png")}
      />
      <View style={[styles.adminloginChild, styles.rectangleViewShadowBox]}>
      <Text style={[styles.eventOrganizer]}>Assign Task</Text>
        <View style={styles.field}>
     
            <TextInput
          style={[styles.inputField, styles.usernameInput]}
          placeholder="Task Name "
          placeholderTextColor="#c9c9c9" 
        />
        </View>
        <View style={styles.field}>
            <TextInput
          style={[styles.inputField, styles.passwordInput]}
          placeholder="Due Date"
          placeholderTextColor="#c9c9c9"
          secureTextEntry
        />
        </View>
        <View style={styles.field}>
            <TextInput
          style={[styles.inputField1, styles.passwordInput]}
          placeholder="Description"
          placeholderTextColor="#c9c9c9"
          multiline
          secureTextEntry
        />
        </View>
        <View style={styles.field}>
            <TextInput
          style={[styles.inputField, styles.passwordInput]}
          placeholder="Assigned To"
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
  inputField1:{
    height: 80,
    borderRadius: Border.br_6xl,
    paddingHorizontal: 10,
    marginBottom: 15,
    top:40,
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
    top: 120,
    left: 28,
    backgroundColor: Color.colorWhite,
    width: 358,
    height: 600,
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
    left: 100,
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
    top: 986,
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
    width:70,
    left:100,
  },
  organizereventeaddtaskShadowBox: {
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
  },
  organizereventeaddtaskLayout: {
    height: 73,
    width: 263,
    left: 65,
    position: "absolute",
  },
  dueDateTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  assignedToTypo: {
    left: 78,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  assignTask: {
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
  tasklistIcon: {
    top: 30,
    left: 260,
    width: 86,
    height: 69,
    position: "absolute",
  },
  organizereventeaddtaskChild: {
    top: 140,
    borderRadius: Border.br_9xl,
    backgroundColor: Color.colorWhite,
    width: 335,
    height: 608,
    left: 29,
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
    position: "absolute",
  },
  organizereventeaddtaskItem: {
    top: 193,
    backgroundColor: Color.colorDarkslateblue_400,
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
  },
  taskName: {
    top: 207,
    left: 73,
  },
  organizereventeaddtaskInner: {
    top: 292,
  },
  rectangleIcon: {
    top: 389,
  },
  organizereventeaddtaskChild2: {
    top: 488,
  },
  dueDate: {
    top: 314,
    left: 79,
    width: 236,
    height: 15,
  },
  description: {
    top: 407,
    width: 184,
    height: 39,
  },
  assignedTo: {
    top: 507,
    width: 227,
    height: 29,
  },
  rectangleView: {
    top: 622,
    left: 129,
    borderRadius: Border.br_6xl,
    width: 126,
    height: 57,
    position: "absolute",
    backgroundColor: Color.colorDarkslateblue_200,
  },
  submit: {
    top: 632,
    left: 152,
    width: 107,
    height: 47,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  organizereventeaddtask: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslateblue_200,
  },
  organizercommitteaddtask: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorDarkslateblue_200,
  },
});

export default Organizercommitteaddtask;
