import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Eventtheadcompletedtask = () => {
  return (
    <View style={styles.eventtheadcompletedtask}>
      <View style={styles.eventtheadcompletedtaskChild} />
      <View
        style={[
          styles.eventtheadcompletedtaskItem,
          styles.eventtheadcompletedtaskShadowBox,
        ]}
      />
      <View
        style={[
          styles.eventtheadcompletedtaskInner,
          styles.eventtheadcompletedtaskShadowBox,
        ]}
      />
      <Text style={[styles.taskNameDue, styles.taskFlexBox]}>{`Task Name:
Due Date:
Assigned To:
Assigned By:
Description:

`}</Text>
      <Text style={[styles.uploadedDocs, styles.uploadedTypo]}>
        Uploaded docs
      </Text>
      <Image
        style={[styles.documentsIcon, styles.documentsIconLayout]}
        contentFit="cover"
        source={require("../assets/Documents.png")}
      />
      <Text style={[styles.taskNameDue, styles.taskFlexBox]}>{`Task Name:
Due Date:
Assigned To:
Assigned By:
Description:

`}</Text>
      <Text style={[styles.uploadedDocs, styles.uploadedTypo]}>
        Uploaded docs
      </Text>
      <Image
        style={[styles.documentsIcon, styles.documentsIconLayout]}
        contentFit="cover"
        source={require("../assets/Documents.png")}
      />
      <Text style={[styles.taskNameDue2, styles.taskFlexBox]}>{`Task Name:
Due Date:
Assigned To:
Assigned By:
Description:

`}</Text>
      <Text style={[styles.uploadedDocs2, styles.uploadedTypo]}>
        Uploaded docs
      </Text>
      <Image
        style={[styles.documentsIcon2, styles.documentsIconLayout]}
        contentFit="cover"
        source={require("../assets/Documents.png")}
      />
      <Text style={[styles.completedTasks, styles.taskFlexBox]}>
        Completed tasks
      </Text>
      <Image
        style={styles.okIcon}
        contentFit="cover"
        source={require("../assets/Ok.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  eventtheadcompletedtaskShadowBox: {
    height: 233,
    width: 292,
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
    position: "absolute",
  },
  taskFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  uploadedTypo: {
    height: 48,
    width: 185,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    left: 66,
    position: "absolute",
  },
  documentsIconLayout: {
    height: 59,
    width: 76,
    left: 251,
    position: "absolute",
  },
  eventtheadcompletedtaskChild: {
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
  eventtheadcompletedtaskItem: {
    top: 465,
    left: 50,
  },
  eventtheadcompletedtaskInner: {
    top: 193,
    left: 51,
  },
  taskNameDue: {
    top: 208,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    left: 66,
    textAlign: "left",
    color: Color.colorWhite,
  },
  uploadedDocs: {
    top: 359,
  },
  documentsIcon: {
    top: 342,
  },
  taskNameDue2: {
    top: 495,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    left: 66,
    textAlign: "left",
    color: Color.colorWhite,
  },
  uploadedDocs2: {
    top: 646,
  },
  documentsIcon2: {
    top: 629,
  },
  completedTasks: {
    top: 47,
    left: 30,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.irishGroverRegular,
    width: 274,
    height: 54,
  },
  okIcon: {
    top: 34,
    left: 284,
    width: 81,
    height: 67,
    position: "absolute",
  },
  eventtheadcompletedtask: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Eventtheadcompletedtask;
