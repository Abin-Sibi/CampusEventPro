import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { firebase, storage } from '../../firebaseConfig';

const FestDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;
  console.log(id,"hwllooooaaee")
  const [festData, setFestData] = React.useState(null);

  const fetchFestData = async () => {
    try {
      const db = firebase.firestore();
      const festRef = db.collection('festData').doc(id);
      const doc = await festRef.get();
      if (doc.exists) {
        setFestData({ id: doc.id, ...doc.data() });
        console.log(doc)
      } else {
        console.log('No fest found with the provided ID');
      }
    } catch (error) {
      console.error('Error fetching fest data:', error);
    }
  };

  React.useEffect(() => {
    fetchFestData();
  }, [id]); // Fetch data when the ID changes

  return (
    <View style={styles.festDetails}>
      {festData ? (
      <>
        <Text style={styles.head}>Welcome to {festData.festname}</Text>
        <Image
          style={styles.image2Icon}
          contentFit="cover"
          source={{ uri: festData.posterImage }}
        />
      </>
    ) : (
      <Text>Loading...</Text>
    )}
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
    width: 130,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  head:{
    top:50,
    left:20,
    fontSize: FontSize.size_5xl,
    color:"white"
  },
  image2Icon: {
    top: 119,
    borderRadius: 10,
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
    top: 590,
    left: 267,
  },
  events: {
    top: 590,
    left: 35,
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
