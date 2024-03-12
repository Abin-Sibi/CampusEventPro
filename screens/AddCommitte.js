import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const AddCommitte = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.addcommitte}>
      <Text style={styles.committeeConnect}>Committee Connect</Text>
      <Image
        style={styles.maleUserIcon}
        contentFit="cover"
        source={require("../assets/Male User.png")}
      />
      <View style={[styles.addcommitteChild, styles.addcommitteShadowBox]} />
      <View style={[styles.addcommitteItem, styles.addcommitteShadowBox]} />
      <Text style={[styles.hostCommitteeCommittee, styles.committeeTypo]}>{`
Host Committee
Committee Head
`}</Text>
      <Text style={[styles.docsCommitteeCommittee, styles.committeeTypo]}>{`
Docs Committee
Committee Head
`}</Text>
      <View style={[styles.addcommitteInner, styles.addcommitteShadowBox]} />
      <Text style={[styles.audiCommitteeCommittee, styles.committeeTypo]}>{`
Audi Committee
Committee Head
`}</Text>
<TouchableOpacity onPress={()=>{navigation.navigate('OrganizerCommitteeDetails')}}>
    <Image
        style={[styles.documentsIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/Documents.png")}
      />
</TouchableOpacity>
      
      <Image
        style={styles.theatreCurtainIcon}
        contentFit="cover"
        source={require("../assets/Theatre Curtain.png")}
      />
      <Image
        style={[styles.receptionIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/Reception.png")}
      />
      <TouchableOpacity onPress={()=>{navigation.navigate('AddCommitteeForm')}}>
        <Image
        style={styles.duplicateIcon}
        contentFit="cover"
        source={require("../assets/Duplicate.png")}
      />
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  addcommitteShadowBox: {
    height: 130,
    width: 287,
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
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  committeeTypo: {
    height: 110,
    width: 234,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  iconPosition: {
    left: 266,
    position: "absolute",
  },
  committeeConnect: {
    top: 39,
    left: 20,
    fontSize: FontSize.size_13xl,
    width: 396,
    height: 45,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  maleUserIcon: {
    top: 25,
    left: 311,
    width: 90,
    height: 90,
    position: "absolute",
  },
  addcommitteChild: {
    top: 164,
    left: 57,
    width: 287,
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
    borderRadius: Border.br_6xl,
  },
  addcommitteItem: {
    top: 312,
    left: 57,
    width: 287,
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
    borderRadius: Border.br_6xl,
  },
  hostCommitteeCommittee: {
    top: 320,
    left: 77,
    height: 110,
    width: 234,
    fontSize: FontSize.size_5xl,
  },
  docsCommitteeCommittee: {
    top: 172,
    left: 77,
    height: 110,
    width: 234,
    fontSize: FontSize.size_5xl,
  },
  addcommitteInner: {
    top: 463,
    left: 49,
  },
  audiCommitteeCommittee: {
    top: 475,
    left: 64,
  },
  documentsIcon: {
    top: 189,
    width: 59,
    height: 60,
  },
  theatreCurtainIcon: {
    top: 511,
    left: 253,
    width: 75,
    height: 58,
    position: "absolute",
  },
  receptionIcon: {
    top: 332,
    width: 70,
    height: 63,
  },
  duplicateIcon: {
    top: 648,
    left: 156,
    width: 56,
    height: 40,
    position: "absolute",
  },
  addcommitte: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default AddCommitte;
