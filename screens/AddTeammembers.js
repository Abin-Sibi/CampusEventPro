import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const AddTeammembers = () => {
  return (
    <View style={styles.addteammembers}>
      <View
        style={[styles.addteammembersChild, styles.addteammembersShadowBox]}
      />
      <View style={styles.addteammembersItem} />
      <View
        style={[styles.addteammembersInner, styles.addteammembersChildLayout]}
      />
      <Text style={[styles.name, styles.nameTypo]}>Name:</Text>
      {/* <Image
        style={[styles.rectangleIcon, styles.addteammembersChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      /> */}
      {/* <Image
        style={[styles.addteammembersChild1, styles.addteammembersChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      /> */}
      {/* <Image
        style={[styles.addteammembersChild2, styles.addteammembersChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      /> */}
      <Text style={[styles.email, styles.emailLayout]}>Email:</Text>
      <Text style={[styles.password, styles.nameTypo]}>password:</Text>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Text style={[styles.submit, styles.submitTypo]}>Submit</Text>
      <Text style={[styles.course, styles.nameTypo]}>Course:</Text>
      <Image
        style={styles.businessmanIcon}
        contentFit="cover"
        source={require("../assets/Businessman.png")}
      />
      <Text style={[styles.addTeamMember, styles.submitTypo]}>
        Add Team Member
      </Text>
      <View
        style={[styles.addteammembersChild3, styles.rectangleViewShadowBox]}
      />
      <Text style={[styles.assignTask, styles.submitTypo]}>Assign Task:</Text>
      <Text style={[styles.dueDate, styles.submitTypo]}>Due Date:</Text>
      <Text style={[styles.itManager, styles.submitTypo]}>IT MANAGER</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addteammembersShadowBox: {
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
  addteammembersChildLayout: {
    height: 73,
    width: 263,
    left: 63,
    position: "absolute",
  },
  nameTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  emailLayout: {
    height: 15,
    fontSize: FontSize.size_5xl,
  },
  rectangleViewShadowBox: {
    height: 57,
    borderRadius: Border.br_6xl,
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
    backgroundColor: Color.colorDarkslateblue_100,
    position: "absolute",
  },
  submitTypo: {
    fontFamily: FontFamily.irishGroverRegular,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  addteammembersChild: {
    top: 154,
    left: 29,
    borderRadius: Border.br_9xl,
    width: 335,
    height: 654,
    backgroundColor: Color.colorDarkslateblue_100,
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
  addteammembersItem: {
    top: 660,
    left: 103,
    width: 187,
    height: 40,
    borderRadius: Border.br_6xl,
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
    backgroundColor: Color.colorDarkslateblue_100,
    position: "absolute",
  },
  addteammembersInner: {
    top: 179,
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
    top: 201,
    fontSize: FontSize.size_5xl,
    left: 77,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  rectangleIcon: {
    top: 289,
  },
  addteammembersChild1: {
    top: 390,
  },
  addteammembersChild2: {
    top: 491,
  },
  email: {
    top: 311,
    width: 836,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
    left: 77,
  },
  password: {
    top: 416,
    left: 76,
    width: 184,
    height: 39,
    fontSize: FontSize.size_5xl,
  },
  rectangleView: {
    top: 723,
    left: 132,
    width: 126,
  },
  submit: {
    top: 736,
    left: 160,
    width: 107,
    height: 47,
    fontSize: FontSize.size_5xl,
  },
  course: {
    top: 516,
    left: 74,
    width: 227,
    height: 68,
    fontSize: FontSize.size_5xl,
  },
  businessmanIcon: {
    top: 17,
    left: 326,
    width: 62,
    height: 62,
    position: "absolute",
  },
  addTeamMember: {
    top: 35,
    left: 13,
    fontSize: FontSize.size_17xl,
  },
  addteammembersChild3: {
    top: 584,
    left: 71,
    width: 242,
  },
  assignTask: {
    top: 598,
    left: 123,
    fontSize: FontSize.size_5xl,
  },
  dueDate: {
    top: 665,
    left: 149,
    width: 109,
    height: 15,
    fontSize: FontSize.size_5xl,
  },
  itManager: {
    top: 79,
    left: 229,
    fontSize: FontSize.size_base,
    width: 193,
    height: 29,
  },
  addteammembers: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default AddTeammembers;
