import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { useRoute } from "@react-navigation/native";
import { firebase } from '../../firebaseConfig';

const OrganizeEventPendingTask = () => {
  const { events } = useRoute().params;
  const [pendingTasks, setPendingTasks] = useState([]);

  const fetchDataById = async () => {
    try {
      const db = firebase.firestore();
      const documentRef = db.collection('festData').doc(events.id);
      const doc = await documentRef.get();

      if (doc.exists) {
        const documentData = { id: doc.id, ...doc.data() };
        const event = documentData.events.find(event => event.eventname === events.eventname);

        if (event) {
          const pendingTask = event.tasks.filter(task => task.status === "pending");
          setPendingTasks(pendingTask);
        } else {
          console.log("Event not found");
        }
      } else {
        console.log("Document not found");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  useEffect(() => {
    fetchDataById();
  }, []);

  const handleDeleteTask = async (taskId) => {
    try {
      const db = firebase.firestore();
      const documentRef = db.collection('festData').doc(events.id);
      const doc = await documentRef.get();
      
      if (doc.exists) {
        const eventData = doc.data();
        if (eventData.events && Array.isArray(eventData.events)) {
          const updatedEvents = eventData.events.map(event => {
            // Find the event that matches the event name
            if (event.eventname === events.eventname) {
              // Filter out the task with the specified taskId
              const updatedTasks = event.tasks.filter(task => task.taskname !== taskId);
              // Return the event object with updated tasks
              return { ...event, tasks: updatedTasks };
            }
            return event; // Return unchanged if not the target event
          });
  
          // Update the document with the updated events array
          await documentRef.update({ events: updatedEvents });
  
          // Refresh the tasks after deletion
          fetchDataById();
        } else {
          console.log("Events field is not an array or is undefined");
        }
      } else {
        console.log("Document not found");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleLongPress = (taskId) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this task?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => handleDeleteTask(taskId)
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pending tasks</Text>
      <View style={styles.taskList}>
        {pendingTasks.map((task, index) => (
          <TouchableOpacity
            key={index}
            onLongPress={() => handleLongPress(task.taskname)} // Handle long press
            style={styles.card}
          >
            <View style={styles.content}>
              <View style={styles.leftContent}>
                <Text style={styles.taskName}>{task.taskname}</Text>
                <Text style={styles.description}>{task.description}</Text>
              </View>
              <View style={styles.rightContent}>
                <Text style={styles.status}>{task.status}</Text>
                <Text style={styles.status}>{new Date(task.duedate.seconds * 1000).toLocaleDateString()}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorDarkslateblue_200,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.irishGroverRegular,
    color: Color.colorWhite,
    marginBottom: 20,
    marginTop:50,
  },
  taskList: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: Color.colorDarkslateblue_100,
    borderRadius: 8,
    marginBottom: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    marginLeft: 10,
    flexShrink: 0,
  },
  taskName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: Color.colorWhite,
  },
  description: {
    fontSize: 16,
    color: Color.colorWhite,
  },
  status: {
    fontSize: 14,
    color: Color.colorWhite,
  },
  tasksIcon: {
    width: 77,
    height: 75,
    marginBottom: 20,
  },
});

export default OrganizeEventPendingTask;
