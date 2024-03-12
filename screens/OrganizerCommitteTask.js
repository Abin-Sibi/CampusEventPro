import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const OrganizerCommitteTask = () => {
  return (
    <View style={styles.organizerCommitteTask}>
      <Text style={styles.assignTask}>Assign Task</Text>
      <Image
        style={styles.tasklistIcon}
        contentFit="cover"
        source={require("../assets/Tasklist-1.png")}
      />
      <View
        style={[styles.organizerCommitteTaskChild, styles.organizerShadowBox]}
      />
   
      <Text style={[styles.taskName, styles.dueDateTypo]}>Task Name:</Text>
      {/* <Image
        style={[styles.organizerCommitteTaskInner, styles.organizerLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.organizerLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.organizerLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <Image
        style={[styles.organizerCommitteTaskChild2, styles.organizerLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      /> */}
      <Text style={[styles.dueDate, styles.dueDateTypo]}>Due Date:</Text>
      <Text style={[styles.description, styles.assignedToTypo]}>
        Description:
      </Text>
      <Text style={[styles.assignedTo, styles.assignedToTypo]}>
        Assigned To:
      </Text>
      <View style={[styles.rectangleView, styles.organizerShadowBox]} />
      <Text style={styles.submit}>Submit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  organizerShadowBox: {
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
  organizerLayout: {
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
  organizerCommitteTaskChild: {
    top: 140,
    borderRadius: Border.br_9xl,
    width: 335,
    height: 608,
    backgroundColor: Color.colorDarkslateblue_100,
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
    left: 29,
  },
  organizerCommitteTaskItem: {
    top: 193,
    backgroundColor: Color.colorDarkslateblue_300,
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
  organizerCommitteTaskInner: {
    top: 292,
  },
  rectangleIcon: {
    top: 389,
  },
  organizerCommitteTaskChild2: {
    top: 488,
  },
  dueDate: {
    top: 314,
    left: 79,
    width: 236,
    height: 35,
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
    backgroundColor: Color.colorDarkslateblue_100,
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
  organizerCommitteTask: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default OrganizerCommitteTask;
