import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TextInput, TouchableOpacity, Platform } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { firebase } from '../../firebaseConfig';
import DateTimePicker from '@react-native-community/datetimepicker';

const Committeeheadaddtask = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { committeedata } = route.params;

  const [taskData, setTaskData] = useState({
    taskname: "",
    duedate: new Date(), // Default to current date
    description: "",
    assignedto: "",
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleInputChange = (name, value) => {
    setTaskData({
      ...taskData,
      [name]: value
    });
  };

  const addTaskToCommittee = async () => {
    // Validation
    if (!taskData.taskname.trim() || !taskData.description.trim() || !taskData.assignedto.trim()) {
      alert("Please fill out all fields");
      return;
    }

    try {
      const db = firebase.firestore();
      const festRef = db.collection('festData');

      const docSnapshot = await festRef.get();

      docSnapshot.forEach(doc => {
        const committees = doc.data().committees;

        if (committees && committees.length > 0) {
          committees.forEach(committee => {
            if (committee.email === committeedata.email && committee.code === committeedata.committeecode) {
              const committeeId = doc.id;
              const updatedTasks = committee.tasks ? [...committee.tasks, { ...taskData, status: 'pending' }] : [{ ...taskData, status: 'pending' }]
              
              festRef.doc(committeeId).update({
                'committees': committees.map(e => {
                  if (e.email === committeedata.email && e.code === committeedata.committeecode) {
                    return { ...e, tasks: updatedTasks };
                  }
                  return e;
                })
              });

              console.log('Task added successfully for committee:', committeeId);
            }
          });
        }
      });
    } catch (error) {
      console.error('Error adding tasks:', error);
    }
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || taskData.duedate;
    setShowDatePicker(Platform.OS === 'ios');
    setTaskData({
      ...taskData,
      duedate: currentDate
    });
  };

  const renderDatePicker = () => {
    if (showDatePicker) {
      return (
        <DateTimePicker
          testID="dateTimePicker"
          value={taskData.duedate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
    <Text style={styles.assignTask}>Assign Task</Text>
    <Image
      style={styles.tasklistIcon}
      contentFit="cover"
      source={require("../../assets/Tasklist-1.png")}
    />
    <View style={[styles.formContainer, styles.rectangleViewShadowBox]}>
      <TextInput
        style={styles.inputField}
        placeholder="Task Name"
        placeholderTextColor="#c9c9c9"
        value={taskData.taskname}
        onChangeText={(text) => handleInputChange('taskname', text)}
      />
      <TouchableOpacity style={styles.inputField} onPress={showDatepicker}>
        <Text style={styles.datePickerText}>{taskData.duedate.toDateString()}</Text>
      </TouchableOpacity>
      <TextInput
        style={[styles.inputField, styles.descriptionInput]}
        placeholder="Description"
        placeholderTextColor="#c9c9c9"
        multiline
        value={taskData.description}
        onChangeText={(text) => handleInputChange('description', text)}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Assigned To"
        placeholderTextColor="#c9c9c9"
        value={taskData.assignedto}
        onChangeText={(text) => handleInputChange('assignedto', text)}
      />
      <Button title="Submit" color="#000080" onPress={addTaskToCommittee} />
      {renderDatePicker()}
    </View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: Color.colorDarkslateblue_200,
  alignItems: "center",
  justifyContent: "center",
},
assignTask: {
  fontSize: FontSize.size_17xl,
  fontWeight: "bold",
  marginBottom: 20,
  color: Color.colorWhite,
},
tasklistIcon: {
  width: 86,
  height: 69,
  marginBottom: 20,
},
formContainer: {
  width: "80%",
  backgroundColor: Color.colorWhite,
  padding: 20,
  borderRadius: Border.br_6xl,
  shadowColor: Color.colorBlack,
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 4,
},
inputField: {
  height: 40,
  marginBottom: 20,
  borderRadius: Border.br_6xl,
  paddingHorizontal: 10,
  backgroundColor: "#F0F0F0",
},
datePickerText: {
  height: 40,
  marginBottom: 20,
  borderRadius: Border.br_6xl,
  paddingHorizontal: 10,
  backgroundColor: "#F0F0F0",
  lineHeight: 40,
},
descriptionInput: {
  height: 80,
},
});

export default Committeeheadaddtask;
