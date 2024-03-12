import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";
import MemberTask from "./MemberTask";

const MemberTaskContainer = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={styles.groupChild} >
      <Text style={styles.eventName1}>Event Name 1</Text>
       <View style={styles.task}>< MemberTask/></View>
      </View>
     
     
    </View>
  );
};

const styles = StyleSheet.create({
  groupChild: {
    top: 30,
    left: 45,
    borderRadius: 25,
    backgroundColor: "#7bceda",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 325,
    position: "absolute",
    height: 248,
  },
  eventName1: {
    top: 17,
    left: 20,
    fontSize: 36,
    fontFamily: FontFamily.itimRegular,
    color: Color.colorBlack,
    textAlign: "left",
    width: 284,
    height: 39,
    position: "absolute",
  },
  rectangleParent: {
    flex:1,
    top:50,
    width: "100%",
    height: 'auto',
  },
  task:{
    top:75,
    left:20
  }
});

export default MemberTaskContainer;
