import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useRoute } from "@react-navigation/native";
import { firebase } from '../firebaseConfig'

const Organizercommittependingtask = () => {
  
  return (
    <View style={styles.organizercommittependingtask}>
      <Text style={styles.pendingTasks}>Pending tasks</Text>
      <View style={styles.organizercommittependingtaskChild} />
      <View
        style={[
          styles.organizercommittependingtaskItem,
          styles.organizercommittependingtaskShadowBox,
        ]}
      />
      <View
        style={[
          styles.organizercommittependingtaskInner,
          styles.organizercommittependingtaskShadowBox,
        ]}
      />
      <Image
        style={styles.tasksIcon}
        contentFit="cover"
        source={require("../assets/Tasks.png")}
      />
      <Text style={[styles.taskNameDue, styles.taskTypo]}>{`Task Name:
Due Date:
Assigned To:
Assigned By:
Description:

`}</Text>
      <Text style={[styles.taskNameDue1, styles.taskTypo]}>{`Task Name:
Due Date:
Assigned To:
Assigned By:
Description:

`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  organizercommittependingtaskShadowBox: {
    height: 173,
    width: 256,
    backgroundColor: Color.colorDarkslateblue_400,
    left: 65,
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
    position: "absolute",
  },
  taskTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  pendingTasks: {
    top: 45,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.irishGroverRegular,
    width: 274,
    height: 54,
    textAlign: "left",
    color: Color.colorWhite,
    left: 29,
    position: "absolute",
  },
  organizercommittependingtaskChild: {
    top: 140,
    borderRadius: Border.br_9xl,
    backgroundColor: Color.colorWhite,
    width: 335,
    height: 608,
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
    left: 29,
    position: "absolute",
  },
  organizercommittependingtaskItem: {
    top: 193,
  },
  organizercommittependingtaskInner: {
    top: 388,
  },
  tasksIcon: {
    top: 34,
    left: 282,
    width: 77,
    height: 75,
    position: "absolute",
  },
  taskNameDue: {
    top: 206,
    left: 94,
  },
  taskNameDue1: {
    top: 403,
    left: 105,
  },
  organizercommittependingtask: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Organizercommittependingtask;
