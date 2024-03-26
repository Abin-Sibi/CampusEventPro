import * as React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Button } from "react-native";
import { Image } from "expo-image";
import {firebase} from '../../firebaseConfig'
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import { AlignCenter } from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import Toast from 'react-native-toast-message';

const AdminLogin = () => {
  const navigation = useNavigation();
    const [loginData, setLoginData] = React.useState({
        username: "",
        password: "",
    });

    const Login = firebase.firestore().collection('loginData');

    const handleLogin = async () => {
        const { username, password } = loginData;
        
        const querySnapshot = await Login.where('username', '==', username).get();

        if (querySnapshot.empty) {
            Toast.show({
                type: 'error',
                text1: 'Login Failed',
                text2: 'Invalid username',
                position: 'bottom',
            });
            return;
        }

        const userData = querySnapshot.docs[0].data();

        if (userData.password !== password) {
            Toast.show({
                type: 'error',
                text1: 'Login Failed',
                text2: 'Incorrect password',
                position: 'bottom',
            });
            return;
        }

        navigation.navigate('CreateFest');
    };

    const handleInputChange = (name, value) => {
      setLoginData({
            ...loginData,
            [name]: value
        });
    };

  return (
    
    <View style={styles.adminlogin}>
      
      <View style={[styles.adminloginChild, styles.rectangleViewShadowBox]}>
      <Text style={[styles.eventOrganizer]}>Event Organizer</Text>
        <View style={styles.field}>
     
            <TextInput
          style={[styles.inputField, styles.usernameInput]}
          placeholder="Username"
          placeholderTextColor="#c9c9c9" 
          value={loginData.username}
          onChangeText={(text) => handleInputChange('username', text)}
        />
        </View>
        <View style={styles.field}>
            <TextInput
          style={[styles.inputField, styles.passwordInput]}
          placeholder="Password"
          placeholderTextColor="#c9c9c9"
          secureTextEntry
          value={loginData.password}
          onChangeText={(text) => handleInputChange('password', text)}
        />
        </View>
        <View style={[styles.buttonContainer]}>
        <Button onPress={handleLogin} title="Login" color="#000080">
          {/* <Text style={styles.loginButtonText}>Login</Text> */}
        </Button>
        
        </View>
        
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
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
    left: 38,
    top: -50,
    color:"black",
    fontWeight:900,
    fontSize:25,
  },
  adminloginChild: {
    top: 171,
    left: 76,
    backgroundColor: Color.colorWhite,
    width: 248,
    height: 412,
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
    width: 85,
    top: 28,
    left: 75,
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
  },
});

export default AdminLogin;
