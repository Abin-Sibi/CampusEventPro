import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Eventmenbercontactdeatils = () => {
  return (
    <View style={styles.committeemenbercontactdeatils}>
      <Text style={styles.committeeMembers}>Event members</Text>
      <View
        style={[
          styles.committeemenbercontactdeatilsChild,
          styles.committeemenbercontactdeatilsShadowBox,
        ]}
      />
      <Image
        style={styles.peopleIcon}
        contentFit="cover"
        source={require("../assets/People.png")}
      />
      <Image
        style={[styles.maleUserIcon, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../assets/Male User (1).png")}
      />
      <Text
        style={[styles.committeeHeadCourse, styles.committeeTypo]}
      >{`Event Head:
Course name:
 Phone no:


`}</Text>
      <View
        style={[
          styles.committeemenbercontactdeatilsItem,
          styles.committeemenbercontactdeatilsShadowBox,
        ]}
      />
      <View
        style={[
          styles.committeemenbercontactdeatilsInner,
          styles.committeemenbercontactdeatilsShadowBox,
        ]}
      />
      <Image
        style={[styles.maleUserIcon1, styles.maleIconLayout]}
        contentFit="cover"
        source={require("../assets/Male User (1).png")}
      />
      <Text
        style={[styles.committeeMemberCourse, styles.committeeTypo]}
      >{`Event member
Course name:
 Phone no:


`}</Text>
      <Image
        style={[styles.maleUserIcon2, styles.maleUserIcon2Position]}
        contentFit="cover"
        source={require("../assets/Male User (1).png")}
      />
      <Text
        style={[styles.committeeMemberCourse1, styles.maleUserIcon2Position]}
      >{`Event member
Course name:
 Phone no:


`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  committeemenbercontactdeatilsShadowBox: {
    height: 140,
    width: 335,
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
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_9xl,
    left: 29,
    position: "absolute",
  },
  maleIconLayout: {
    height: 90,
    width: 90,
    left: 41,
  },
  committeeTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    left: 133,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
  },
  maleUserIcon2Position: {
    top: 324,
    position: "absolute",
  },
  committeeMembers: {
    top: 45,
    fontFamily: FontFamily.irishGroverRegular,
    color: Color.colorWhite,
    width: 274,
    height: 54,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    left: 29,
    position: "absolute",
  },
  committeemenbercontactdeatilsChild: {
    top: 140,
  },
  peopleIcon: {
    top: 21,
    left: 287,
    width: 67,
    height: 94,
    position: "absolute",
  },
  maleUserIcon: {
    top: 159,
    position: "absolute",
  },
  committeeHeadCourse: {
    top: 159,
    position: "absolute",
  },
  committeemenbercontactdeatilsItem: {
    top: 305,
  },
  committeemenbercontactdeatilsInner: {
    top: 470,
  },
  maleUserIcon1: {
    top: 489,
    position: "absolute",
  },
  committeeMemberCourse: {
    top: 498,
    position: "absolute",
  },
  maleUserIcon2: {
    height: 90,
    width: 90,
    left: 41,
  },
  committeeMemberCourse1: {
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    left: 133,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
  },
  committeemenbercontactdeatils: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Eventmenbercontactdeatils;
