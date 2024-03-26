import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Modal, TextInput, Button, ScrollView } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import DatePicker from 'react-native-datepicker';
import { firebase } from '../../firebaseConfig'

const CreateFest = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [festData, setFestData] = React.useState({
    festname: "",
    startdate: "",
  });

  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    const db = firebase.firestore();
    const collectionRef = db.collection('festData');
    const snapshot = await collectionRef.get();
console.log(snapshot,"this is the data")
    const fetchedData = [];
    snapshot.forEach((doc) => {
      fetchedData.push({ id: doc.id, ...doc.data() });
    });
console.log("this is the fetvh data",fetchedData)
    setData(fetchedData);
  };
  React.useEffect(() => {
    

    fetchData();
  }, []);

  const toggleModal = () => {
    fetchData();
    setModalVisible(!isModalVisible);
  };

  const handleInputChange = (name, value) => {
    setFestData({
      ...festData,
      [name]: value
    });
  };

  const Fest = firebase.firestore().collection('festData');

  const addfest = async () => {
    // Implement your login logic here
    await Fest.add(festData).then(() => {
      console.log('Data added successfully');
      setRegistrationData({
        festname: '',
        startdate: '',
      });
     


      // navigation.navigate('CreateFest')
      console.log('Data added successfully--------');

    }).catch((error) => {
      // // Handle errors
      // console.log("nnnnnnnnnn",error)
      // Alert.alert("Login Failed", error.message);
    });

  };
  const navigate = (id) => {
    navigation.navigate('FestDetails',{id})
  }
  return (
    <View style={styles.createFest}>

<ScrollView contentContainerStyle={styles.container}>
 <Text style={styles.goodMorning}>Good Morning</Text>
<View>
   {data.map((item, index) => (
  <View key={index} style={styles.createFestItem}>
    <Text style={[styles.daysLeft, styles.daysTypo]}> 11 Days left</Text>
    <Text style={[styles.interfaces, styles.gatewaysTypo]}>{JSON.stringify(item.festname)}</Text>
    <TouchableOpacity onPress={() => navigate(item.id)}>
      <Image
        style={[styles.calendarIcon, styles.calendarIconLayout]}
        contentFit="cover"
        source={require("../../assets/Calendar.png")}
      />
    </TouchableOpacity>
    <Text style={[styles.startDate20012024, styles.startTypo]}>Start Date: {JSON.stringify(item.startdate)}</Text>
  </View>
))}

<View style={styles.wannaCreateA}><Text style={styles.wannaCreate}>
        Wanna Create a New Fest ,Click Here...
      </Text><TouchableOpacity onPress={toggleModal}>
        <Image
          style={styles.duplicateIcon}
          contentFit="cover"
          source={require("../../assets/Duplicate.png")}
        />
      </TouchableOpacity>
  </View>
</View>
     

      
      <Image
        style={styles.maleUserIcon}
        contentFit="cover"
        source={require("../../assets/Male User.png")}
      />
         

     
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Create Fest</Text>
            {/* Fest Name Input */}
            <TextInput
              style={styles.input}
              placeholder="Fest Name"
              value={festData.festname}
              onChangeText={(text) => handleInputChange('festname', text)}
            />
            {/* Poster Image Input */}
            <TextInput
              style={styles.input}
              placeholder="Poster Image"

            // Add necessary props for handling the input
            />
            {/* Start Date Input */}
            {/* You can use a date picker library or implement your own */}


            <TextInput
              style={styles.input}
              placeholder="Start Date"

              value={festData.startdate}
              onChangeText={(date) => handleInputChange('startdate', date)}
            // Add necessary props for handling the input
            />
            <Button title="Create Fest" onPress={() => { toggleModal(); addfest(); }} />
          </View>
        </View>
      </Modal>
</ScrollView>
     

    </View>
  );
};

const styles = StyleSheet.create({
 
  daysTypo: {
    height: 47,
    width: 140,
    top:45,
    color: Color.colorWhitesmoke,
    fontSize: FontSize.size_5xl,
    left: 20,
    fontFamily: FontFamily.itimRegular,
    textAlign: "left",
    position: "absolute",
  },
  gatewaysTypo: {
    height: 28,
    width: 72,
    fontSize: FontSize.size_sm,
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.itimRegular,
    left: 20,
    top:20,
    textAlign: "left",
    position: "absolute",
  },
  calendarIconLayout: {
    width: 87,
    height: 100,
    position: "absolute",
  },
  startTypo: {
    width: 166,
    height: 28,
    fontSize: FontSize.size_sm,
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.itimRegular,
    textAlign: "left",
    position: "absolute",
  },
  goodMorning: {
    top: 34,
    left: 25,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.irishGroverRegular,
    width: 267,
    height: 43,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  
  createFestItem: {
    top:120,
    marginTop:10,
    width: 287,
    height: 130,
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
    left: 50,
    // position: "absolute",
  },
  daysLeft: {
    top: 2,

  },
  interfaces: {
    top: 9,
  },
  calendarIcon: {
    top:2,
    left: 184,
  },
  startDate20012024: {
    top: 87,
    left: 20,
  },
  wannaCreate:{
color:Color.colorWhite
  },
  wannaCreateA: {
    marginTop: 157,
    left: 21,
    alignItems:'center',
    fontSize: FontSize.size_xl,
    width: 343,
    height: 65,
    fontFamily: FontFamily.itimRegular,
    textAlign: "left",
    color: Color.colorWhite,
  },
  maleUserIcon: {
    top: 10,
    left: 264,
    width: 90,
    height: 90,
    position: "absolute",
  },
  duplicateIcon: {
    width: 56,
    height: 40,
  },
  createFest: {
    backgroundColor: Color.colorDarkslateblue_300,
    flex: 1,
    width: "100%",
    height: 879,
    overflow: "hidden",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    backgroundColor: Color.colorDarkslateblue_300,
    padding: 20,
    borderRadius: Border.br_6xl,
    elevation: 5,
  },
  modalHeading: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    marginBottom: 20,
    color: Color.colorWhite
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    backgroundColor: Color.colorWhite,
    padding: 10,
  },
});

export default CreateFest;
