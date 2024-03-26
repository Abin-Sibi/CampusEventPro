import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";

const FestDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;
  console.log(id,"hwllooooaaee")
  return (
    <View style={styles.festDetails}>
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../../assets/image 2.png")}
      />
      <View style={styles.festShadowBox} />
      <View style={styles.festShadowBox} />
      <View style={styles.rectangleViewShadowBox} />
      <View style={styles.rectangleViewShadowBox} />
      <TouchableOpacity onPress={()=>{navigation.navigate('AddCommitte',{id})}}>
        <Text style={[styles.committe, styles.eventsTypo]}>Committe</Text>
      </TouchableOpacity>
        
        
        <TouchableOpacity onPress={()=>{navigation.navigate('AddEvent',{id})}}>
        <Text style={[styles.events, styles.eventsTypo]}>Events</Text>
        </TouchableOpacity>
     
      
      <Image
        style={styles.userIcon}
        contentFit="cover"
        source={require("../../assets/Male User.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  eventsTypo: {
    height: 44,
    width: 106,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  image2Icon: {
    top: 119,
    borderRadius: Border.br_22xl,
    width: 373,
    height: 383,
    left: 10,
    position: "absolute",
  },
  festShadowBox: {
    height: 57,
    width: 126,
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
    top: 611,
    left: 10,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    left: 257,
    height: 57,
    width: 126,
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
    top: 611,
    position: "absolute",
  },
  committe: {
    top: 625,
    left: 277,
  },
  events: {
    top: 624,
    left: 30,
  },
  userIcon: {
    top: 25,
    width: 73,
    height: 73,
    left: 277,
    position: "absolute",
  },
  festDetails: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default FestDetails;
