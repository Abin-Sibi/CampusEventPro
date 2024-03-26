import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

const HomePage = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = React.useState('Login');

  React.useEffect(() => {
    console.log(selectedOption,"0000")
 
  }, [selectedOption])
  
 const handleLoginPress = (selectedOption) => {
    // Perform navigation based on the selected option
    if (selectedOption === 'eventOrganizer') {
      navigation.navigate('AdminLogin');
    } else if (selectedOption === 'Others') {
      navigation.navigate('Others');
    }else if(selectedOption==='login'){
      console.log("login")
    }
  };
  
  return (
    <View style={styles.homePage}>
      <View style={[styles.homePageChild, styles.homePosition]} />

      <View style={[styles.homePageItem, styles.eventNamePosition]} />
      <View style={[styles.homePageInner, styles.homePosition]} />
      <View style={[styles.rectangleView, styles.assignedTasksPosition]} />
      <Image
        style={styles.youthDayJumpingUpColoredC}
        contentFit="cover"
        source={require("../../assets/bg1.png")}
      />
    
      <Text style={styles.campuseventpro}>CampusEventPro</Text>
      <View style={[styles.homePageChild1, styles.calendarIconPosition]} />
      <Text style={[styles.daysLeft, styles.loginTypo]}>11 Days left</Text>
      <Text style={[styles.festName, styles.festNameTypo]}>FEST NAME</Text>
      <Image
        style={[styles.calendarIcon, styles.calendarIconPosition]}
        contentFit="cover"
        source={require("../../assets/Calendar.png")}
      />
      <Text style={[styles.startDate20012024, styles.festNameTypo]}>
        Start Date: 20-01-2024
      </Text>

      <Picker
        selectedValue={selectedOption}
        style={[styles.dropdownButton, styles.eventOrganizerPicker]}
        onValueChange={(itemValue) => {
          setSelectedOption(itemValue);
          handleLoginPress(itemValue); // Pass the selected option to handleLoginPress
        }}
      >
        <Picker.Item label="login" value="Login" />
        <Picker.Item label="eventOrganizer" value="eventOrganizer" />
        <Picker.Item label="Others" value="Others" />
        {/* Add other options as needed */}
      </Picker>


    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    display: "none",
    position: "absolute",
  },
  eventNameTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
  },
  eventOrganizerPicker: {
    position: 'absolute',
    bottom: 0, // Align the Picker at the bottom of the page
    width: '100%', // Make the Picker full-width
    backgroundColor: 'white', // Adjust the background color as needed
  },
  assignedTasksPosition: {
    left: 44,
    display: "none",
    position: "absolute",
  },
  loginbg: {
    backgroundColor: '#2E367F'
  },
  eventNamePosition: {
    left: 48,
    display: "none",
    position: "absolute",
  },
  calendarIconPosition: {
    height: 130,
    top: 220,
    position: "absolute",
  },
  loginTypo: {
    width: 220,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  festNameTypo: {
    height: 28,
    fontSize: FontSize.size_sm,
    color: Color.colorWhitesmoke,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  homePageChild: {
    top: 98,
    left: 34,
    width: 325,
    height: 315,
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
    backgroundColor: Color.colorLightcyan,
  },
  eventName: {
    top: 97,
    width: 204,
    left: 48,
    display: "none",
    position: "absolute",
  },
  assignedTasks: {
    top: 190,
    transform: [
      {
        rotate: "3.13deg",
      },
    ],
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
  },
  homePageItem: {
    top: 166,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorAzure,
    width: 285,
    height: 73,
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
  homePageInner: {
    top: 96,
    left: 24,
    backgroundColor: Color.colorLightseagreen,
    width: 345,
    height: 208,
  },
  rectangleView: {
    top: 131,
    backgroundColor: Color.colorGainsboro,
    width: 320,
    height: 334,
  },
  youthDayJumpingUpColoredC: {
    top: 0,
    width: "100%",
    left: 0,
    position: "absolute",
    height: 869,
  },
  rectangleIcon: {
    top: 741,
    left: 31,
    width: 348,
    height: 844,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  campuseventpro: {
    top: 75,
    fontSize: FontSize.size_21xl,
    letterSpacing: 0.4,
    color: Color.colorAzure,
    textAlign: "center",
    width: 393,
    height: 58,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    left: 0,
    position: "absolute",
  },
  homePageChild1: {
    backgroundColor: Color.colorDarkslateblue_100,
    width: 287,
    left: 0,
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
  },
  daysLeft: {
    top: 264,
    height: 47,
    color: Color.colorWhitesmoke,
    width: 120,
    left: 35,
  },
  festName: {
    top: 249,
    width: 172,
    left: 55,
    height: 28,
    fontSize: FontSize.size_sm,
  },
  calendarIcon: {
    left: 175,
    width: 87,
  },
  startDate20012024: {
    top: 298,
    left: 23,
    width: 146,
  },
  button: {
    top: 653,
    left: 180,
  },
 
  homePage: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 869,
    backgroundColor: Color.colorLightcyan,
  },
});

export default HomePage;
