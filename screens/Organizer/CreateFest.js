import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Modal, TextInput, Button, ScrollView, Alert } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { firebase, storage } from '../../firebaseConfig';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import Toast from 'react-native-toast-message';
import { ToastProvider } from 'react-native-toast-message';

const CreateFest = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [festData, setFestData] = useState({
    festname: "",
    startdate: null,
    posterImage: null,
  });
  const [selectedFest, setSelectedFest] = useState(null);
  const [data, setData] = useState([]);
  const [isDatePickerVisible, setDatePickerVisible] = React.useState(false);


  // Fetch fest data from Firestore
  const fetchData = async () => {
    const db = firebase.firestore();
    const collectionRef = db.collection('festData');
    const snapshot = await collectionRef.get();
    const fetchedData = [];
    snapshot.forEach((doc) => {
      fetchedData.push({ id: doc.id, ...doc.data() });
    });
    setData(fetchedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleModal = () => {
    fetchData();
    setModalVisible(!isModalVisible);
  };

  const toggleEditModal = (fest) => {
    setSelectedFest(fest);
    setEditModalVisible(!isEditModalVisible);
  };

  const handleInputChange = (name, value) => {
    setFestData({
      ...festData,
      [name]: value
    });
  };

  // Function to upload image to Firebase Storage
  const pickImage = async () => {
    // Request permission if needed
    if (Constants.platform.ios) {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
        return;
      }
    }
  
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.cancelled) {
      uploadImage(result.assets[0].uri); // Upload selected image to Firebase Storage
    }
  };

  const uploadImage = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
  
      const storageRef = storage.ref();
      const imageName = uri.substring(uri.lastIndexOf("/") + 1);
      const imageRef = storageRef.child(`festImages/${imageName}`);
  
      await imageRef.put(blob);
  
      const url = await imageRef.getDownloadURL();
  
      setFestData({ ...festData, posterImage: url });
  
      console.log("Image uploaded successfully:", url);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("There was an error uploading the image. Please try again.");
    }
  };
  
  // Function to add fest data to Firestore
  const addfest = async () => {
    if (!festData.festname || !festData.startdate || !festData.posterImage) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'All fields are required!',
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }
    const Fest = firebase.firestore().collection('festData');
    await Fest.add(festData).then(() => {
      console.log('Data added successfully');
      setFestData({
        festname: '',
        startdate: null,
        posterImage: null,
      });
      toggleModal(); // Close modal after adding fest
    }).catch((error) => {
      console.log("Error adding fest:", error);
    });
  };

  // Function to delete fest from Firestore
  const deleteFest = async (id) => {
    const festRef = firebase.firestore().collection('festData').doc(id);
    try {
      await festRef.delete();
      console.log('Fest deleted successfully');
      fetchData(); // Refresh fest data after deletion
    } catch (error) {
      console.error('Error deleting fest:', error);
    }
  };

  // Function to navigate to fest details screen
  const navigate = (id) => {
    navigation.navigate('FestDetails', { id });
  };

  // Function to handle long press on fest item for deletion
  const handleLongPress = (id) => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this fest?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => deleteFest(id) },
      ],
      { cancelable: false }
    );
  };

  // Function to update fest data in Firestore
  const updateFest = async () => {
    const festRef = firebase.firestore().collection('festData').doc(selectedFest.id);
    try {
      await festRef.update(selectedFest);
      console.log('Fest updated successfully');
      setEditModalVisible(false); // Close edit modal after update
    } catch (error) {
      console.error('Error updating fest:', error);
    }
  };

  const toggleDatePicker = () => {
    setDatePickerVisible(!isDatePickerVisible);
  };

  return (
    
    <View style={styles.createFest}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.goodMorning}>Good Morning</Text>
        <View>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.createFestItem}
              onLongPress={() => handleLongPress(item.id)} // Add long-press handler
            >
              <Text style={[styles.daysLeft, styles.daysTypo]}> 11 Days left</Text>
              <Text style={[styles.interfaces, styles.gatewaysTypo]}>{JSON.stringify(item.festname)}</Text>
              <TouchableOpacity onPress={() => navigate(item.id)}>
                <Image 
                  style={[styles.calendarIcon, styles.calendarIconLayout]}
                  contentFit="cover"
                  source={require("../../assets/Calendar.png")}
                />
              </TouchableOpacity>
              <Text style={[styles.startDate20012024, styles.startTypo]}>
  Start Date:{item.startdate ? new Date(item.startdate.seconds * 1000).toLocaleDateString() : ''}
</Text>
              <TouchableOpacity onPress={() => toggleEditModal(item)}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))}
          <View style={styles.wannaCreateA}>
            <Text style={styles.wannaCreate}>
              Wanna Create a New Fest, Click Here...
            </Text>
            <TouchableOpacity onPress={toggleModal}>
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

        {/* Add/Edit Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isEditModalVisible}
          onRequestClose={() => setEditModalVisible(!isEditModalVisible)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalHeading}>Edit Fest</Text>
              {/* Fest Name Input */}
              <TextInput
                style={styles.input}
                placeholder="Fest Name"
                value={selectedFest ? selectedFest.festname : ''}
                onChangeText={(text) => setSelectedFest({ ...selectedFest, festname: text })}
              />
              {/* Start Date Input */}
              <TouchableOpacity onPress={toggleDatePicker}>
                <Text style={styles.input}>{selectedFest && selectedFest.startdat ? selectedFest.startdate.toLocaleDateString() : 'Select Start Date'}</Text>
              </TouchableOpacity>
              {/* Poster Image Input */}
              <TouchableOpacity onPress={pickImage}>
                <Text style={styles.input}>Choose Poster Image</Text>
              </TouchableOpacity>
              <Button title="Update Fest" onPress={updateFest} />
              {isDatePickerVisible && (
                <DateTimePicker
                value={selectedFest && selectedFest.startdate ? new Date(selectedFest.startdate.seconds * 1000) : new Date()}
                mode="date"
                display="spinner"
                onChange={(event, selectedDate) => {
                  toggleDatePicker(); // Close date picker after selecting a date
                  if (selectedDate) {
                    const currentDate = selectedDate || selectedFest.startdate;
                    setSelectedFest({ ...selectedFest, startdate: currentDate });
                  }
                }}
              />
              )}
            </View>
          </View>
        </Modal>

        {/* Create Fest Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(!isModalVisible)}
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
              {/* Start Date Input */}
              <TouchableOpacity onPress={toggleDatePicker}>
                <Text style={styles.input}>{festData.startdate ? festData.startdate.toLocaleDateString() : 'Select Start Date'}</Text>
              </TouchableOpacity>
              {/* Poster Image Input */}
              <TouchableOpacity onPress={pickImage}>
                <Text style={styles.input}>Choose Poster Image</Text>
              </TouchableOpacity>
              <Button title="Create Fest" onPress={addfest} />
              {isDatePickerVisible && (
                <DateTimePicker
                  value={festData.startdate ? new Date(festData.startdate) : new Date()}
                  mode="date"
                  display="spinner"
                  onChange={(event, selectedDate) => {
                    toggleDatePicker(); // Close date picker after selecting a date
                    const currentDate = selectedDate || festData.startdate;
                    handleInputChange('startdate', currentDate);
                  }}
                />
              )}
            </View>
          </View>
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  daysTypo: {
    height: 47,
    width: 140,
    top: 45,
    color: Color.colorWhitesmoke,
    fontSize: FontSize.size_5xl,
    left: 20,
    fontFamily: FontFamily.itimRegular,
    textAlign: "left",
    position: "absolute",
  },
  editButton: {
    position: 'absolute',
    top: 90,
    right: 10,
    padding: 5,
    backgroundColor: Color.colorDarkslateblue_300,
    color: Color.colorWhite,
    borderRadius: 5,
  },
  gatewaysTypo: {
    height: 28,
    width: 72,
    fontSize: FontSize.size_sm,
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.itimRegular,
    left: 20,
    top: 20,
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
    top: 120,
    marginTop: 10,
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
  },
  daysLeft: {
    top: 2,
  },
  interfaces: {
    top: 9,
  },
  calendarIcon: {
    top: 2,
    left: 184,
  },
  startDate20012024: {
    top: 87,
    left: 20,
  },
  wannaCreate: {
    color: Color.colorWhite
  },
  wannaCreateA: {
    marginTop: 157,
    left: 21,
    alignItems: 'center',
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
