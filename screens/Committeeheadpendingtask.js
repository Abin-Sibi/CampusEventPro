import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Committeeheadpendingtask = () => {
  return (
    <View style={styles.committeeheadpendingtask}>
      <View style={styles.committeeheadpendingtaskChild} />
      <View
        style={[
          styles.committeeheadpendingtaskItem,
          styles.committeeheadpendingtaskShadowBox,
        ]}
      />
      <Text style={[styles.taskNameDue, styles.taskFlexBox]}>{`Task Name:
Due Date:
Assigned To:
Assigned By:
Description:

`}</Text>
      <View
        style={[
          styles.committeeheadpendingtaskInner,
          styles.committeeheadpendingtaskShadowBox,
        ]}
      />
      <Text style={[styles.taskNameDue1, styles.taskFlexBox]}>{`Task Name:
Due Date:
Assigned To:
Assigned By:
Description:

`}</Text>
      <Text style={[styles.pendingTasks, styles.taskFlexBox]}>
        Pending tasks
      </Text>
      <Image
        style={styles.tasksIcon}
        contentFit="cover"
        source={require("../assets/Tasks.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  committeeheadpendingtaskShadowBox: {
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
  taskFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  committeeheadpendingtaskChild: {
    top: 140,
    left: 29,
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
    position: "absolute",
  },
  committeeheadpendingtaskItem: {
    top: 193,
  },
  taskNameDue: {
    top: 206,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    left: 93,
    textAlign: "left",
    color: Color.colorWhite,
  },
  committeeheadpendingtaskInner: {
    top: 388,
  },
  taskNameDue1: {
    top: 409,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    left: 93,
    textAlign: "left",
    color: Color.colorWhite,
  },
  pendingTasks: {
    top: 43,
    left: 38,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.irishGroverRegular,
    width: 274,
    height: 54,
  },
  tasksIcon: {
    top: 22,
    left: 274,
    width: 77,
    height: 75,
    position: "absolute",
  },
  committeeheadpendingtask: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Committeeheadpendingtask;
