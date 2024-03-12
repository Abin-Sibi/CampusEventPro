import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const CommitteemembersGeneratedRep = () => {
  return (
    <View style={styles.committeemembersGeneratedRep}>
      <Text style={[styles.previousReports, styles.searchDaysetcTypo]}>
        {" "}
        Previous Reports
      </Text>
      <View
        style={[
          styles.committeemembersGeneratedRepChild,
          styles.searchIconPosition,
        ]}
      />
      <Text style={[styles.searchDaysetc, styles.searchDaysetcTypo]}>
        Search days,etc
      </Text>
      <Image
        style={[styles.searchIcon, styles.searchIconPosition]}
        contentFit="cover"
        source={require("../assets/Search.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchDaysetcTypo: {
    textAlign: "left",
    fontFamily: FontFamily.irishGroverRegular,
    fontSize: FontSize.size_13xl,
    position: "absolute",
  },
  searchIconPosition: {
    top: 148,
    position: "absolute",
  },
  previousReports: {
    top: 69,
    left: 21,
    color: Color.colorWhite,
    width: 274,
    height: 54,
  },
  committeemembersGeneratedRepChild: {
    left: 19,
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 359,
    height: 57,
  },
  searchDaysetc: {
    top: 152,
    left: 28,
    color: Color.colorBlack,
    width: 298,
    height: 71,
  },
  searchIcon: {
    left: 326,
    width: 43,
    height: 66,
  },
  committeemembersGeneratedRep: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default CommitteemembersGeneratedRep;
