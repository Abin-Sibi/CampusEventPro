import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Committeemembernotification = () => {
  return (
    <View style={styles.committeemembernotification}>
      <View style={styles.committeemembernotificationChild} />
      <Text style={styles.searchDaysetc}>Search days,etc</Text>
      <Image
        style={styles.searchIcon}
        contentFit="cover"
        source={require("../assets/Search.png")}
      />
      <Text style={styles.yourNotifications}>Your Notifications</Text>
      <Image
        style={styles.maleUserIcon}
        contentFit="cover"
        source={require("../assets/Male User.png")}
      />
      <View style={styles.committeemembernotificationShadowBox} />
      <View style={styles.committeemembernotificationShadowBox} />
      <View
        style={[
          styles.rectangleView,
          styles.committeemembernotificationChildShadowBox2,
        ]}
      />
      <View style={styles.committeemembernotificationChildShadowBox1} />
      <View style={styles.committeemembernotificationChildShadowBox} />
      <Text style={[styles.today, styles.todayTypo]}>Today</Text>
      <View
        style={[
          styles.committeemembernotificationChild3,
          styles.committeemembernotificationChildShadowBox2,
        ]}
      />
      <View style={styles.committeemembernotificationChildShadowBox1} />
      <View style={styles.committeemembernotificationChildShadowBox} />
      <Text style={[styles.today, styles.todayTypo]}>Today</Text>
      <View
        style={[
          styles.committeemembernotificationChild6,
          styles.committeemembernotificationChildShadowBox2,
        ]}
      />
      <View
        style={[
          styles.committeemembernotificationChild7,
          styles.committeemembernotificationChildShadowBox3,
        ]}
      />
      <Text style={[styles.updateList900am, styles.updateTypo1]}>
        Update list 9:00Am
      </Text>
      <View
        style={[
          styles.committeemembernotificationChild8,
          styles.committeemembernotificationChildShadowBox3,
        ]}
      />
      <Text style={[styles.yesterday, styles.todayTypo]}>Yesterday</Text>
      <Text style={[styles.updateList900am1, styles.updateTypo]}>
        Update list 9:00Am
      </Text>
      <Text style={[styles.updateList900am2, styles.updateTypo1]}>
        Update list 9:00Am
      </Text>
      <Text style={[styles.updateList900am3, styles.updateTypo]}>
        Update list 9:00Am
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  committeemembernotificationChildShadowBox2: {
    height: 206,
    backgroundColor: Color.colorDarkslateblue_400,
    width: 303,
    left: 42,
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
  todayTypo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_5xl,
    left: 64,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  committeemembernotificationChildShadowBox3: {
    width: 303,
    left: 42,
    height: 57,
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
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  updateTypo1: {
    width: 250,
    fontSize: FontSize.size_xl,
    left: 69,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
    height: 57,
    position: "absolute",
  },
  updateTypo: {
    left: 72,
    width: 250,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    color: Color.colorBlack,
    height: 57,
    position: "absolute",
  },
  committeemembernotificationChild: {
    width: 359,
    height: 57,
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
    borderRadius: Border.br_6xl,
    left: 17,
    top: 159,
    position: "absolute",
  },
  searchDaysetc: {
    top: 163,
    fontSize: FontSize.size_13xl,
    width: 298,
    height: 71,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.irishGroverRegular,
    left: 26,
    position: "absolute",
  },
  searchIcon: {
    left: 324,
    width: 43,
    height: 66,
    top: 159,
    position: "absolute",
  },
  yourNotifications: {
    top: 40,
    fontSize: FontSize.size_17xl,
    width: 376,
    height: 77,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.irishGroverRegular,
    left: 17,
    position: "absolute",
  },
  maleUserIcon: {
    top: 27,
    left: 303,
    width: 90,
    height: 90,
    position: "absolute",
  },
  committeemembernotificationShadowBox: {
    height: 571,
    width: 335,
    borderRadius: Border.br_9xl,
    top: 255,
    left: 26,
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
    position: "absolute",
  },
  rectangleView: {
    top: 304,
    height: 206,
    backgroundColor: Color.colorDarkslateblue_400,
  },
  committeemembernotificationChildShadowBox1: {
    top: 369,
    width: 303,
    left: 42,
    height: 57,
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
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  committeemembernotificationChildShadowBox: {
    top: 426,
    width: 303,
    left: 42,
    height: 57,
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
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  today: {
    top: 322,
  },
  committeemembernotificationChild3: {
    top: 304,
    height: 206,
    backgroundColor: Color.colorDarkslateblue_400,
  },
  committeemembernotificationChild6: {
    top: 528,
  },
  committeemembernotificationChild7: {
    top: 593,
  },
  updateList900am: {
    top: 609,
  },
  committeemembernotificationChild8: {
    top: 650,
  },
  yesterday: {
    top: 546,
  },
  updateList900am1: {
    top: 385,
  },
  updateList900am2: {
    top: 666,
  },
  updateList900am3: {
    top: 442,
  },
  committeemembernotification: {
    backgroundColor: Color.colorDarkslateblue_200,
    width: 393,
    height: 852,
    overflow: "hidden",
  },
});

export default Committeemembernotification;
