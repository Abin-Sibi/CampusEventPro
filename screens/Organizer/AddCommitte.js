import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Alert, Modal, TextInput, Button } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../../GlobalStyles";
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import { firebase } from '../../firebaseConfig';

const AddCommitte = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const isFocused = useIsFocused();

  const [data, setData] = useState({ committees: [] });

  const fetchDataById = async () => {
    try {
      const db = firebase.firestore();
      const documentRef = db.collection('festData').doc(id);
      const doc = await documentRef.get();
      
      if (doc.exists) {
        const documentData = { id: doc.id, ...doc.data() };
        setData(documentData);
      } else {
        console.log("Document not found");
      }  
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  const deleteCommittee = async (committeeId) => {
    try {
      const db = firebase.firestore();
      const documentRef = db.collection('festData').doc(id);
      const doc = await documentRef.get();
      
      if (doc.exists) {
        const committees = doc.data().committees || [];
        const updatedCommittees = committees.filter(committee => committee.code !== committeeId);
        
        await documentRef.update({ committees: updatedCommittees });
        
        fetchDataById();
      } else {
        console.log("Document not found");
      }  
    } catch (error) {
      console.error("Error deleting committee:", error);
    }
  };
  
  useEffect(() => {
    if (isFocused) {
      fetchDataById();
    }
  }, [isFocused]);

  const handleDelete = (committeeId) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this committee?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => deleteCommittee(committeeId)
        }
      ]
    );
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [editedCommitteeData, setEditedCommitteeData] = useState(null);
  const [formData, setFormData] = useState({
    committeename: "",
    committeeheadname: "",
    email: "",
    password: "",
    headcourse: "",
    phone: "",
  });

  const handleEdit = (committee) => {
    setEditedCommitteeData(committee);
    setFormData({
      committeename: committee.committeename,
      committeeheadname: committee.committeeheadname,
      // Set other form field values here
      email: committee.email,
    password: committee.password,
    headcourse: committee.headcourse,
    phone: committee.phone
    });
    setModalVisible(true);
  };

  const handleSubmitEditedCommittee = async () => {
    try {
      const db = firebase.firestore();
      const documentRef = db.collection('festData').doc(id);
      const doc = await documentRef.get();
  
      if (doc.exists) {
        const committees = doc.data().committees || [];
        const updatedCommittees = committees.map(committee => {
          if (committee.code === editedCommitteeData.code) {
            return { ...committee, ...formData }; // Update the edited committee with new form data
          }
          return committee;
        });
  
        await documentRef.update({ committees: updatedCommittees });
  
        fetchDataById();
        setModalVisible(false); // Close the modal after successful update
      } else {
        console.log("Document not found");
      }
    } catch (error) {
      console.error("Error updating committee:", error);
    }
  };

  return (
    <View style={styles.addevent}>
      <Text style={styles.eventsConnect}>Commitee Connect</Text>
      {data.committees && data.committees.length > 0 ? (
        data.committees.map((committee, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.touchableCommittee} // Add this style
            onLongPress={() => handleDelete(committee.code)}
          >
            <View style={[styles.addeventChild, styles.addeventShadowBox]} >
              <Text style={[styles.itManagerEvent, styles.itManagerEventTypo]}>{committee.committeename}</Text>
              <Text style={[styles.itManagerEvent1, styles.itManagerEventTypo]}>{committee.committeeheadname}</Text>
              <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(committee)}>
           <Text style={styles.editButtonText}>Edit</Text>
         </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.navigate('CommitteeDetails',{committees:{id:id,committeename:committee.committeename,committeecode:committee.code}}) }}>
                <Image  
                  style={[styles.businessmanIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../../assets/Businessman.png")}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text>No committees available</Text>
      )}
      <Image
        style={[styles.maleUserIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/Male User.png")}
      />
      <View style={styles.duplicateIconView}>
      <TouchableOpacity onPress={() => { navigation.navigate('AddCommitteeForm', { id }) }}>
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
          <Text style={styles.modalTitle}>Edit Commitee</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Event Name"
              value={formData.committeename}
              onChangeText={(text) => setFormData({...formData, committeename: text})}
            />
            <TextInput
              style={styles.inputField}
              placeholder="Event Head"
              value={formData.committeeheadname}
              onChangeText={(text) => setFormData({...formData, committeeheadname: text})}
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
            <Button title="Submit" onPress={handleSubmitEditedCommittee} />
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
  touchableCommittee: {
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
    fontSize: FontSize.size_16xl,
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

export default AddCommitte;
