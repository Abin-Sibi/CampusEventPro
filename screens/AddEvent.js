import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { firebase } from '../firebaseConfig'

const AddEvent = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  console.log(id, "hwllooooaaee")
  const isFocused = useIsFocused();

  const [data, setData] = React.useState([]);

  const fetchDataById = async () => {
    try {
      const db = firebase.firestore();
      const documentRef = db.collection('festData').doc(id);
      const doc = await documentRef.get();
      
      if (doc.exists) {
        // Document found, extract its data
        const documentData = { id: doc.id, ...doc.data() };
        console.log("Document data:", documentData);
        setData(documentData);
      } else {
        console.log("Document not found");
        return null;
      }  
    } catch (error) {
      console.error("Error fetching document:", error);
      return null;
    }
  };
  React.useEffect(() => {
    if (isFocused) {
      fetchDataById();
    }
  }, [isFocused])
  return (
    <View style={styles.addevent}>
      <Text style={styles.eventsConnect}>Events Connect</Text>
          {data.events && data.events.map((event, eventIndex) => (
            <View key={eventIndex} style={[styles.addeventChild, styles.addeventShadowBox]} >
              <Text style={[styles.itManagerEvent, styles.itManagerEventTypo]}>{event.eventname}</Text>
              <Text style={[styles.itManagerEvent1, styles.itManagerEventTypo]}>{event.eventheadname}</Text>
              <TouchableOpacity onPress={() => { navigation.navigate('EventDetails',{events:{id:id,eventname:event.eventname}}) }}>
                <Image  
                  style={[styles.businessmanIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/Businessman.png")}
                />
              </TouchableOpacity>
            </View>
          ))}

      <Image
        style={[styles.maleUserIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/Male User.png")}
      />
      <View style={styles.duplicateIconView}>
        <TouchableOpacity onPress={() => { navigation.navigate('Addeventform', { id }) }}>
        <Image
          style={styles.duplicateIcon}
          contentFit="cover"
          source={require("../assets/Duplicate.png")}
        />
      </TouchableOpacity>
      </View>
      

    </View>
  );
};

const styles = StyleSheet.create({
  addeventShadowBox: {
    height: 130,
    marginTop: 20,
    width: 287,
    left: 41,
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
  itManagerEventTypo: {
    height: 110,
    width: 234,
    fontSize: FontSize.size_5xl,
    left: 31,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  iconLayout: {
    height: 90,
    width: 90,
    position: "absolute",
  },
  eventsConnect: {
    top: 39,
    left: 20,
    fontSize: FontSize.size_21xl,
    width: 396,
    height: 45,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  addeventChild: {
    top: 108,
  },
  itManagerEvent: {
    top: 66,
  },
  itManagerEvent1: {
    top: 26,
  },
  businessmanIcon: {
    top: 16,
    left: 180,
  },
  maleUserIcon: {
    top: 18,
    left: 303,
  },
  
  duplicateIcon: {
    
    width: 56,
    height: 40,
    position:"absolute"
  },
  duplicateIconView:{
    top: 140,
    left: 156,
    width: 56,
    height: 40,
  },
  addevent: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default AddEvent;
