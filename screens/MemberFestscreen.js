import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";
import {useNavigation } from "@react-navigation/native"
import MemberTaskContainer from "../components/MemberTaskContainer";
import MemberEventOptions from "../components/MemberEventOptions";

function MemberFestscreen() {
    const navigation = useNavigation();
    return (
        
      <View style={styles.eventOrganizerDashboad}>
        <View style={styles.eventOrganizerDashboadChild} />
        <Text style={[styles.eventOrganizer, styles.wannaCreateATypo]}>
         Team Member
        </Text>
        <Image
          style={[styles.menuIcon, styles.menuIconPosition]}
          resizeMode="cover"
          source={require("../assets/menu.png")}
        />
        <Image
          style={styles.maleUserIcon}
          resizeMode="cover"
          source={require("../assets/Male User.png")}
        />
        <MemberTaskContainer/>
        <MemberEventOptions/>
       
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    wannaCreateATypo: {
      textAlign: "left",
      fontFamily: FontFamily.itimRegular,
    },
    menuIconPosition: {
      left: 28,
      position: "absolute",
    },
    eventShadowBox: {
      height: 182,
      width: 325,
      left: 28,
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
      backgroundColor: Color.colorSkyblue,
      borderRadius: Border.br_6xl,
      position: "absolute",
    },
   
    eventOrganizerDashboadChild: {
      left: 10,
      width: 373,
      height: 48,
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
      backgroundColor: Color.colorSkyblue,
      borderRadius: Border.br_6xl,
      top: 12,
      position: "absolute",
    },
    eventOrganizer: {
      top: 22,
      left: 114,
      color: Color.colorBlack,
      fontSize: FontSize.size_5xl,
      textAlign: "left",
      fontFamily: FontFamily.itimRegular,
      position: "absolute",
    },
    menuIcon: {
      top: 24,
      width: 27,
      height: 25,
    },
    maleUserIcon: {
      left: 330,
      width: 47,
      height: 50,
      top: 12,
      position: "absolute",
    },
    eventOrganizerDashboadItem: {
      top: 107,
    },
  
    eventOrganizerDashboadInner: {
      top: 316,
    },
  
    wannaCreateA: {
      top: 567,
      fontSize: 20,
      color: "#676666",
      textAlign: "left",
      fontFamily: FontFamily.itimRegular,
      left: 28,
    },
    eventOrganizerDashboad: {
      backgroundColor: "#defafe",
      flex: 1,
      width: "100%",
      height: 852,
      overflow: "hidden",
    },
  });

export default MemberFestscreen



