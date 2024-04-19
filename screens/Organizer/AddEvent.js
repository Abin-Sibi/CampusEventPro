import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Alert, Modal, TextInput, Button } from "react-native";
// Import other dependencies...
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { firebase } from '../../firebaseConfig'
import Addeventform from "./Addeventform";

const AddEvent = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const isFocused = useIsFocused();

  const [modalVisible, setModalVisible] = useState(false);
  const [editedEventData, setEditedEventData] = useState(null);
  const [formData, setFormData] = useState({
    eventname: "",
    eventheadname: "",
    email: "",
    password: "",
    headcourse: "",
    phone: "",
  });

  const handleEdit = (event) => {
    setEditedEventData(event);
    setFormData({
      eventname: event.eventname,
      eventheadname: event.eventheadname,
      email: event.email,
      password: event.password,
      headcourse: event.headcourse,
      phone: event.phone,
    });
    setModalVisible(true);
  };

  const handleSubmitEditedEvent = async () => {
    try {
      const db = firebase.firestore();
      const documentRef = db.collection('festData').doc(id);
      const doc = await documentRef.get();
  
      if (doc.exists) {
        const events = doc.data().events || [];
        const updatedEvents = events.map(event => {
          if (event.code === editedEventData.code) {
            return { ...event, ...formData }; // Update the edited event with new form data
          }
          return event;
        });
  
        await documentRef.update({ events: updatedEvents });
  
        // Refresh data after update
        fetchDataById();
        setModalVisible(false); // Close the modal after successful update
      } else {
        console.log("Document not found");
      }
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

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

  const deleteEvent = async (eventId) => {
    try {
      const db = firebase.firestore();
      const documentRef = db.collection('festData').doc(id);
      const doc = await documentRef.get();
      
      if (doc.exists) {
        // Ensure the eventId is present in the document
        const events = doc.data().events || [];
        const updatedEvents = events.filter(event => event.code !== eventId);
        
        // Update the document with the updated events array
        await documentRef.update({ events: updatedEvents });
        
        // Refresh data after deletion
        fetchDataById();
      } else {
        console.log("Document not found");
      }  
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  React.useEffect(() => {
    if (isFocused) {
      fetchDataById();
    }
  }, [isFocused]);

  const handleDelete = (eventId) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this event?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => deleteEvent(eventId)
        }
      ]
    );
  };

  return (
    <View style={styles.addevent}>
      <Text style={styles.eventsConnect}>Events Connect</Text>
      {data.events && data.events.map((event, eventIndex) => (
       <TouchableOpacity 
       key={eventIndex} 
       style={styles.touchableEvent}
       onLongPress={() => handleDelete(event.code)}
     >
       <View style={[styles.addeventChild, styles.addeventShadowBox]} >
         <Text style={[styles.itManagerEvent, styles.itManagerEventTypo]}>{event.eventname}</Text>
         <Text style={[styles.itManagerEvent1, styles.itManagerEventTypo]}>{event.eventheadname}</Text>
         {/* Edit button */}
         <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(event)}>
           <Text style={styles.editButtonText}>Edit</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={() => { navigation.navigate('EventDetails',{events:{id:id,eventname:event.eventname}}) }}>
           <Image  
             style={[styles.businessmanIcon, styles.iconLayout]}
             contentFit="cover"
             source={require("../../assets/Businessman.png")}
           />
         </TouchableOpacity>
       </View>
       
     </TouchableOpacity>
      ))}
      <Image
        style={[styles.maleUserIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/Male User.png")}
      />
      <View style={styles.duplicateIconView}>
        <TouchableOpacity onPress={() => { navigation.navigate('Addeventform', { id }) }}>
          <Image
            style={styles.duplicateIcon}
            contentFit="cover"
            source={require("../../assets/Duplicate.png")}
          />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Event</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Event Name"
              value={formData.eventname}
              onChangeText={(text) => setFormData({...formData, eventname: text})}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Event Head"
              value={formData.eventheadname}
              onChangeText={(text) => setFormData({...formData, eventheadname: text})}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Email"
              value={formData.email}
              onChangeText={(text) => setFormData({...formData, email: text})}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Password"
              secureTextEntry
              value={formData.password}
              onChangeText={(text) => setFormData({...formData, password: text})}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Head Course Name"
              value={formData.headcourse}
              onChangeText={(text) => setFormData({...formData, headcourse: text})}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Phone No"
              value={formData.phone}
              onChangeText={(text) => setFormData({...formData, phone: text})}
            />
            <Button title="Submit" onPress={handleSubmitEditedEvent} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
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
  editButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: Color.colorDarkslateblue_300,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: Border.br_6xl,
  },
  editButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.irishGroverRegular,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
  },
  touchableEvent: {
    width: "100%",
    top:100,
    marginTop:10, // Add border color
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
