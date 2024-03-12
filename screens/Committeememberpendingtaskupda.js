import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Committeememberpendingtaskupda = () => {
  return (
    <View style={styles.committeememberpendingtaskupda}>
      <View style={styles.committeememberpendingtaskupdaChild} />
      <View
        style={[
          styles.committeememberpendingtaskupdaItem,
          styles.rectangleViewShadowBox,
        ]}
      />
      <View style={styles.committeememberpendingtaskupdaInner} />
      <Text style={styles.taskDescription}>Task Description:</Text>
      <Text style={styles.taskName}>Task Name</Text>
      <Text style={styles.taskDescription}>{`Task Description:

Due Date:`}</Text>
      <Text style={[styles.addComments, styles.uploadDocsTypo]}>
        Add Comments
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Text style={[styles.uploadDocs, styles.uploadDocsTypo]}>
        Upload docs:
      </Text>
      <Image
        style={styles.upwardArrowIcon}
        contentFit="cover"
        source={require("../assets/Upward Arrow.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewShadowBox: {
    height: 122,
    width: 274,
    borderRadius: Border.br_6xl,
    left: 51,
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
  uploadDocsTypo: {
    height: 42,
    width: 228,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    left: 76,
    position: "absolute",
  },
  committeememberpendingtaskupdaChild: {
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
  committeememberpendingtaskupdaItem: {
    top: 420,
  },
  committeememberpendingtaskupdaInner: {
    top: 172,
    left: 69,
    width: 256,
    height: 173,
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
  taskDescription: {
    top: 206,
    height: 114,
    width: 228,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    left: 76,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  taskName: {
    top: 43,
    left: 30,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.irishGroverRegular,
    height: 54,
    textAlign: "left",
    color: Color.colorWhite,
    width: 274,
    position: "absolute",
  },
  addComments: {
    top: 453,
  },
  rectangleView: {
    top: 588,
  },
  uploadDocs: {
    top: 621,
  },
  upwardArrowIcon: {
    top: 609,
    left: 257,
    width: 68,
    height: 65,
    position: "absolute",
  },
  committeememberpendingtaskupda: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Committeememberpendingtaskupda;
