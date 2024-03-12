import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Committeemembergeneratereports = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.committeemembergeneratereports}>
      <Text style={[styles.generateReports, styles.generateReportsPosition]}>
        Generate Reports
      </Text>
      <Image
        style={[styles.businessReportIcon, styles.generateReportsPosition]}
        contentFit="cover"
        source={require("../assets/Business Report.png")}
      />
      <TouchableOpacity onPress={()=>{navigation.navigate('CommitteemembersGeneratedRep')}}>
        <Image
        style={styles.menuIcon}
        contentFit="cover"
        source={require("../assets/menu.png")}
      />
      </TouchableOpacity>
      
      <Image
        style={[styles.calendar4Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/Calendar.png")}
      />
      <Image
        style={[styles.timeMachineIcon, styles.timeMachineIconPosition]}
        contentFit="cover"
        source={require("../assets/Time Machine.png")}
      />
      <Image
        style={[styles.pavilionIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/Pavilion.png")}
      />
      <Text style={[styles.committeeDetails, styles.generateReportsTypo]}>
        Committee Details
      </Text>
      <Image
        style={styles.groupOfCompanies}
        contentFit="cover"
        source={require("../assets/Group Of Companies (1).png")}
      />
      <Text
        style={[styles.committeeNameCommittee, styles.committeeTypo]}
      >{`Committee Name:
Committee Head:


`}</Text>
      <View
        style={[
          styles.committeemembergeneratereportsChild,
          styles.timeMachineIconPosition,
        ]}
      />
      <Text style={[styles.submit, styles.committeeTypo]}>Submit</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  generateReportsPosition: {
    height: 54,
    top: 27,
    position: "absolute",
  },
  iconLayout: {
    height: 90,
    width: 90,
    top: 245,
  },
  timeMachineIconPosition: {
    left: 145,
    position: "absolute",
  },
  generateReportsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.irishGroverRegular,
    fontSize: FontSize.size_13xl,
    color: Color.colorWhite,
  },
  committeeTypo: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  generateReports: {
    left: 40,
    width: 274,
    textAlign: "left",
    fontFamily: FontFamily.irishGroverRegular,
    fontSize: FontSize.size_13xl,
    color: Color.colorWhite,
  },
  businessReportIcon: {
    left: 314,
    width: 54,
  },
  menuIcon: {
    top: 85,
    left: 9,
    width: 62,
    height: 64,
    position: "absolute",
  },
  calendar4Icon: {
    left: 0,
    position: "absolute",
  },
  timeMachineIcon: {
    height: 90,
    width: 90,
    top: 245,
  },
  pavilionIcon: {
    left: 287,
    position: "absolute",
  },
  committeeDetails: {
    top: 426,
    left: 52,
    width: 293,
    height: 19,
    position: "absolute",
  },
  groupOfCompanies: {
    top: 454,
    left: 308,
    width: 83,
    height: 39,
    position: "absolute",
  },
  committeeNameCommittee: {
    top: 474,
    left: 102,
    width: 218,
    height: 87,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
  },
  committeemembergeneratereportsChild: {
    top: 682,
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
    width: 126,
    height: 57,
  },
  submit: {
    top: 692,
    left: 168,
    color: Color.colorBlack,
    width: 107,
    height: 47,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  committeemembergeneratereports: {
    backgroundColor: Color.colorDarkslateblue_200,
    width: 397,
    height: 852,
    overflow: "hidden",
  },
});

export default Committeemembergeneratereports;
