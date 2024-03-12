import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const CreateFestForm = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.createfestform}>
      <Image
        style={styles.maleUserIcon}
        contentFit="cover"
        source={require("../assets/Male User.png")}
      />
      <View style={[styles.createfestformChild, styles.createfestformLayout]} />
      <Text style={[styles.gateWays, styles.interfacesLayout]}>Gate Ways</Text>
      <Text style={[styles.startDate20012024, styles.startLayout]}>
        Start Date: 20-01-2024
      </Text>
      <Image
        style={[styles.calendarIcon, styles.calendarIconLayout]}
        contentFit="cover"
        source={require("../assets/Calendar.png")}
      />
      <Image
        style={[styles.openedFolderIcon, styles.openedIconLayout]}
        contentFit="cover"
        source={require("../assets/Opened Folder.png")}
      />
      <View style={[styles.createfestformItem, styles.createfestformLayout]} />
      <Text style={[styles.interfaces, styles.interfacesLayout]}>
        Interfaces
      </Text>
      <Text style={[styles.startDate10032024, styles.startTypo]}>
        Start Date: 10-03-2024
      </Text>
      <Image
        style={[styles.calendarIcon1, styles.calendarIconLayout]}
        contentFit="cover"
        source={require("../assets/Calendar.png")}
      />
      <Text style={[styles.startDate100320241, styles.startTypo]}>
        Start Date: 10-03-2024
      </Text>
      <Image
        style={[styles.openedFolderIcon1, styles.openedIconLayout]}
        contentFit="cover"
        source={require("../assets/Opened Folder.png")}
      />
      <Image
        style={[styles.sumIcon, styles.sumIconLayout]}
        contentFit="cover"
        source={require("../assets/Sum.png")}
      />
      <Text style={[styles.interfaces1, styles.createTypo]}>Interfaces</Text>
      <Text style={[styles.startDate100320242, styles.createTypo]}>
        Start Date: 10-03-2024
      </Text>
      <Image
        style={[styles.calendarIcon2, styles.calendarIconLayout]}
        contentFit="cover"
        source={require("../assets/Calendar.png")}
      />
      <Image
        style={[styles.openedFolderIcon2, styles.openedIconLayout]}
        contentFit="cover"
        source={require("../assets/Opened Folder.png")}
      />
      <Image
        style={[styles.sumIcon1, styles.sumIconLayout]}
        contentFit="cover"
        source={require("../assets/Sum.png")}
      />
      <View style={styles.createfestformInner} />
      <Text style={[styles.createFest, styles.createTypo]}>Create Fest</Text>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <View
        style={[styles.createfestformChild1, styles.rectangleViewShadowBox]}
      />
      <View
        style={[
          styles.createfestformChild2,
          styles.createfestformChildShadowBox,
        ]}
      />
      <Text style={[styles.name, styles.nameTypo]}>name:</Text>
      <Text style={[styles.posterImg, styles.nameTypo]}>Poster Img</Text>
      <View
        style={[
          styles.createfestformChild3,
          styles.createfestformChildShadowBox,
        ]}
      />
      <Image
        style={styles.tearOffCalendarIcon}
        contentFit="cover"
        source={require("../assets/Tear-Off Calendar.png")}
      />
      <Text style={[styles.startDate, styles.nameTypo]}>Start Date</Text>
      <Text style={[styles.create, styles.createTypo]}>Create</Text>
      <Image
        style={styles.pictureIcon}
        contentFit="cover"
        source={require("../assets/Picture.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  createfestformLayout: {
    height: 182,
    width: 325,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  interfacesLayout: {
    height: 47,
    width: 120,
    fontSize: FontSize.size_5xl,
  },
  startLayout: {
    height: 28,
    width: 146,
    left: 71,
    fontSize: FontSize.size_sm,
  },
  calendarIconLayout: {
    height: 130,
    width: 87,
    position: "absolute",
  },
  openedIconLayout: {
    height: 34,
    width: 33,
    position: "absolute",
  },
  startTypo: {
    top: 427,
    height: 28,
    width: 146,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  sumIconLayout: {
    height: 56,
    width: 86,
    position: "absolute",
  },
  createTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    height: 31,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_6xl,
    position: "absolute",
    backgroundColor: Color.colorLightcyan,
  },
  createfestformChildShadowBox: {
    height: 30,
    width: 319,
    left: 39,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_6xl,
    position: "absolute",
    backgroundColor: Color.colorLightcyan,
  },
  nameTypo: {
    left: 66,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  maleUserIcon: {
    top: 12,
    left: 330,
    width: 47,
    height: 50,
    position: "absolute",
  },
  createfestformChild: {
    top: 107,
    left: 28,
  },
  gateWays: {
    top: 167,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
    left: 70,
    height: 47,
    width: 120,
  },
  startDate20012024: {
    top: 211,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  calendarIcon: {
    top: 135,
    left: 231,
    height: 130,
    width: 87,
  },
  openedFolderIcon: {
    top: 248,
    left: 297,
    height: 34,
    width: 33,
  },
  createfestformItem: {
    top: 323,
    left: 32,
  },
  interfaces: {
    top: 383,
    left: 74,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  startDate10032024: {
    left: 75,
  },
  calendarIcon1: {
    top: 351,
    left: 235,
  },
  startDate100320241: {
    left: 74,
  },
  openedFolderIcon1: {
    top: 464,
    left: 300,
  },
  sumIcon: {
    top: 514,
    left: 156,
  },
  interfaces1: {
    top: 502,
    height: 47,
    width: 120,
    fontSize: FontSize.size_5xl,
    left: 70,
  },
  startDate100320242: {
    top: 546,
    height: 28,
    width: 146,
    left: 71,
    fontSize: FontSize.size_sm,
  },
  calendarIcon2: {
    top: 470,
    left: 231,
    height: 130,
    width: 87,
  },
  openedFolderIcon2: {
    top: 583,
    left: 297,
    height: 34,
    width: 33,
  },
  sumIcon1: {
    top: 637,
    left: 153,
  },
  createfestformInner: {
    top: 412,
    left: 19,
    width: 355,
    height: 341,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  createFest: {
    top: 436,
    left: 125,
    fontSize: FontSize.size_5xl,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  rectangleView: {
    top: 495,
    left: 37,
    width: 320,
  },
  createfestformChild1: {
    top: 680,
    left: 123,
    width: 135,
  },
  createfestformChild2: {
    top: 554,
  },
  name: {
    top: 502,
  },
  posterImg: {
    top: 561,
  },
  createfestformChild3: {
    top: 612,
  },
  tearOffCalendarIcon: {
    top: 614,
    left: 294,
    width: 74,
    height: 26,
    position: "absolute",
  },
  startDate: {
    top: 619,
  },
  create: {
    top: 687,
    left: 164,
    fontSize: FontSize.size_sm,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
  },
  pictureIcon: {
    top: 559,
    left: 319,
    width: 25,
    height: 20,
    position: "absolute",
  },
  createfestform: {
    width: 393,
    height: 879,
    overflow: "hidden",
    backgroundColor: Color.colorLightcyan,
  },
});

export default CreateFestForm;
