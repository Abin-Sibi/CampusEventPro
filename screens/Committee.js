import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Committee = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.committee}>
      <Text style={[styles.committeeConnect, styles.addCommittteeTypo]}>
        Committee Connect
      </Text>
      <View style={[styles.committeeChild, styles.committeeShadowBox]} />
      <View style={[styles.committeeItem, styles.committeeShadowBox]} />
      <Text style={[styles.hostCommitteeCommittee, styles.committeeTypo]}>{`
Host Committee
Committee Head
`}</Text>
      <Text style={[styles.docsCommitteeCommittee, styles.committeeTypo]}>{`
Docs Committee
Committee Head
`}</Text>
      <View style={[styles.committeeInner, styles.committeeShadowBox]} />
      <Text style={[styles.audiCommitteeCommittee, styles.committeeTypo]}>{`
Audi Committee
Committee Head
`}</Text>
<TouchableOpacity onPress={()=>{navigation.navigate('AddCommitteeForm')}}>
  <Image
        style={styles.duplicateIcon}
        contentFit="cover"
        source={require("../assets/Duplicate.png")}
      />
</TouchableOpacity>
      
      <View style={styles.rectangleView} />
      <Text style={[styles.addCommitttee, styles.addCommittteeTypo]}>
        Add Committtee
      </Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('CommitteeDetails')}}>
        <Image
        style={styles.receptionIcon}
        contentFit="cover"
        source={require("../assets/Reception.png")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('CommitteeDetails')}}>
        <Image
        style={styles.receptionIcon1}
        contentFit="cover"
        source={require("../assets/Documents.png")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('CommitteeDetails')}}>
        <Image
        style={styles.receptionIcon2}
        contentFit="cover"
        source={require("../assets/Theatre Curtain.png")}
      />
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  addCommittteeTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  committeeShadowBox: {
    height: 130,
    width: 287,
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
  committeeTypo: {
    height: 110,
    width: 234,
    fontSize: FontSize.size_5xl,
    left: 73,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  committeeConnect: {
    top: 39,
    left: 20,
    fontSize: FontSize.size_21xl,
    width: 396,
    height: 45,
  },
  committeeChild: {
    top: 127,
    left: 53,
    width: 287,
    borderRadius: Border.br_6xl,
  },
  committeeItem: {
    top: 275,
    left: 53,
    width: 287,
    borderRadius: Border.br_6xl,
  },
  hostCommitteeCommittee: {
    top: 283,
  },
  docsCommitteeCommittee: {
    top: 135,
  },
  committeeInner: {
    top: 433,
    left: 58,
  },
  audiCommitteeCommittee: {
    top: 443,
  },
  duplicateIcon: {
    top: 611,
    left: 152,
    width: 56,
    height: 40,
    position: "absolute",
  },
  rectangleView: {
    top: 704,
    left: 117,
    width: 169,
    height: 42,
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
  addCommitttee: {
    top: 713,
    left: 164,
    fontSize: FontSize.size_base,
    width: 122,
    height: 28,
  },
  receptionIcon: {
    top: 307,
    left: 270,
    width: 70,
    height: 63,
    position: "absolute",
  },
  receptionIcon1: {
    top: 157,
    left: 270,
    width: 70,
    height: 63,
    position: "absolute",
  },
  receptionIcon2: {
    top: 467,
    left: 270,
    width: 70,
    height: 63,
    position: "absolute",
  },
  committee: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Committee;
