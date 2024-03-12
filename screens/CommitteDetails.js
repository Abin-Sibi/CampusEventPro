import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const CommitteeDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.committeeDetails}>
      <Text style={styles.committeeDetails1}>Committee Details</Text>
      <View style={styles.committeeDetailsChild} />
      {/* <Image
        style={styles.committeeDetailsItem}
        contentFit="cover"
        source={require("../assets/rectangle-22.png")}
      /> */}
      <Text
        style={[styles.committeeNameCommittee, styles.taskViewTypo]}
      >{`Committee Name:
Committee Head:


`}</Text>
      <Image
        style={styles.groupOfCompanies}
        contentFit="cover"
        source={require("../assets/Group Of Companies.png")}
      />
      <Text style={[styles.monitorProgress, styles.taskViewTypo]}>
        Monitor Progress
      </Text>
      <Image
        style={styles.loadingBarIcon}
        contentFit="cover"
        source={require("../assets/Loading Bar.png")}
      />
      <Text style={[styles.assignTask, styles.taskViewTypo]}>Assign Task</Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('OrganizerCommitteTask')}}>
        <Image
        style={[styles.tasklistIcon, styles.tasklistIconLayout]}
        contentFit="cover"
        source={require("../assets/Tasklist.png")}
      />
      </TouchableOpacity>

      
      <Text style={[styles.viewCompletedTask, styles.taskViewTypo]}>
        View completed task
      </Text>
      <Image
        style={styles.eyelashes3dIcon}
        contentFit="cover"
        source={require("../assets/Eyelashes 3D.png")}
      />
      <Image
        style={[styles.eyelashes3dIcon1, styles.eyelashes3dIconPosition]}
        contentFit="cover"
        source={require("../assets/Eyelashes 3D.png")}
      />
      <Image
        style={[styles.eyelashes3dIcon2, styles.eyelashes3dIconPosition]}
        contentFit="cover"
        source={require("../assets/Eyelashes 3D.png")}
      />
      <Text style={[styles.viewCommitteeMembers, styles.taskViewTypo]}>
        View Committee members
      </Text>
      <Text style={[styles.viewUncompletedTask, styles.tasklistIconLayout]}>
        View uncompleted task
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  taskViewTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
  },
  tasklistIconLayout: {
    height: 48,
    position: "absolute",
  },
  eyelashes3dIconPosition: {
    left: 166,
    height: 42,
    width: 42,
    position: "absolute",
  },
  committeeDetails1: {
    top: 76,
    left: 19,
    fontSize: 32,
    width: 319,
    height: 45,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  committeeDetailsChild: {
    top: 141,
    left: 18,
    borderRadius: Border.br_9xl,
    backgroundColor: Color.colorDarkslateblue_100,
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
    width: 354,
    height: 684,
    position: "absolute",
  },
  committeeDetailsItem: {
    top: 169,
    width: 225,
    height: 99,
    left: 77,
    position: "absolute",
  },
  committeeNameCommittee: {
    top: 186,
    left: 94,
    width: 218,
    height: 87,
    position: "absolute",
  },
  groupOfCompanies: {
    top: 31,
    left: 293,
    width: 90,
    height: 90,
    position: "absolute",
  },
  monitorProgress: {
    top: 309,
    left: 105,
    width: 267,
    height: 26,
    position: "absolute",
  },
  loadingBarIcon: {
    top: 336,
    width: 226,
    height: 63,
    left: 77,
    position: "absolute",
  },
  assignTask: {
    top: 419,
    left: 119,
    width: 274,
    height: 54,
    position: "absolute",
  },
  tasklistIcon: {
    top: 450,
    left: 154,
    width: 43,
  },
  viewCompletedTask: {
    top: 518,
    left: 91,
    width: 271,
    height: 36,
    position: "absolute",
  },
  eyelashes3dIcon: {
    top: 547,
    left: 161,
    height: 42,
    width: 42,
    position: "absolute",
  },
  eyelashes3dIcon1: {
    top: 646,
  },
  eyelashes3dIcon2: {
    top: 752,
  },
  viewCommitteeMembers: {
    top: 718,
    left: 57,
    width: 289,
    position: "absolute",
  },
  viewUncompletedTask: {
    top: 612,
    width: 286,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    left: 77,
  },
  committeeDetails: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default CommitteeDetails;
