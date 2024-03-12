import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ChangeeventHead = () => {
  return (
    <View style={styles.changeeventHead}>
      <View
        style={[styles.changeeventHeadChild, styles.changeeventShadowBox]}
      />
      <View
        style={[styles.changeeventHeadItem, styles.changeeventChildLayout]}
      />
      <Text style={[styles.name, styles.nameTypo]}>Name:</Text>
      {/* <Image
        style={[styles.changeeventHeadInner, styles.changeeventChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      /> */}
     
      {/* <Image
        style={[styles.changeeventHeadChild1, styles.changeeventChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      /> */}
      {/* <Image
        style={[styles.changeeventHeadChild2, styles.changeeventChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      /> */}
      <Text style={[styles.email, styles.nameTypo]}>Email:</Text>
      <Text style={[styles.password, styles.nameTypo]}>password:</Text>
      <View style={[styles.rectangleView, styles.changeeventShadowBox]} />
      <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
      <Text style={[styles.course, styles.courseTypo]}>Course:</Text>
      <Text style={[styles.phoneNo, styles.courseTypo]}>Phone no:</Text>
      <Text style={[styles.changeEventHead, styles.submitTypo]}>
        Change Event Head
      </Text>
      <Image
        style={styles.businessmanIcon}
        contentFit="cover"
        source={require("../assets/Businessman.png")}
      />
      <Text style={[styles.itManager, styles.submitTypo]}>IT MANAGER</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  changeeventShadowBox: {
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
  changeeventChildLayout: {
    height: 73,
    width: 263,
    left: 65,
    position: "absolute",
  },
  nameTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  submitTypo: {
    fontFamily: FontFamily.irishGroverRegular,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  courseTypo: {
    height: 68,
    width: 227,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  changeeventHeadChild: {
    top: 140,
    left: 29,
    borderRadius: Border.br_9xl,
    width: 335,
    height: 656,
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
  changeeventHeadItem: {
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
  name: {
    top: 207,
    left: 73,
  },
  changeeventHeadInner: {
    top: 292,
  },
  rectangleIcon: {
    top: 389,
  },
  changeeventHeadChild1: {
    top: 583,
  },
  changeeventHeadChild2: {
    top: 488,
  },
  email: {
    top: 314,
    left: 79,
    width: 236,
    height: 15,
  },
  password: {
    top: 407,
    left: 78,
    width: 184,
    height: 39,
  },
  rectangleView: {
    top: 679,
    left: 127,
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
    top: 689,
    left: 147,
    width: 107,
    height: 47,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.irishGroverRegular,
  },
  course: {
    top: 513,
    left: 76,
  },
  phoneNo: {
    top: 601,
    left: 73,
  },
  changeEventHead: {
    top: 33,
    left: 11,
    fontSize: FontSize.size_13xl,
  },
  businessmanIcon: {
    top: 17,
    left: 303,
    width: 62,
    height: 75,
    position: "absolute",
  },
  itManager: {
    top: 79,
    left: 200,
    fontSize: FontSize.size_base,
    width: 193,
    height: 29,
  },
  changeeventHead: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default ChangeeventHead;
