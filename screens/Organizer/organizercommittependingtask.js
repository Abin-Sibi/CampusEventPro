import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { useRoute } from "@react-navigation/native";
import { firebase } from '../../firebaseConfig';

const Organizercommittependingtask = () => {
  const route = useRoute();
  const { committees } = route.params;
  const [pendingTasks, setPendingTasks] = React.useState([]);

  const fetchDataById = async () => {
    try {
      const db = firebase.firestore();
      const documentRef = db.collection('festData').doc(committees.id);
      const doc = await documentRef.get();
      
      if (doc.exists) {
        const documentData = { id: doc.id, ...doc.data() };
        if (documentData) {
          const committee = documentData.committees.find(committee => committee.committeename === committees.committeename);
          if (committee) {
            const pendingTasks = committee.tasks.filter(task => task.status === "pending");
            setPendingTasks(pendingTasks);
          } else {
            console.log("Event not found");
          }
        } else {
          console.log("Festival not found");
        }
      } else {
        console.log("Document not found");
      }  
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  React.useEffect(() => {
    fetchDataById();
  }, []);

  const handleDeleteTask = async (taskId) => {
    try {
      const db = firebase.firestore();
      const documentRef = db.collection('festData').doc(committees.id);
      const doc = await documentRef.get();
      
      if (doc.exists) {
        const committeeData = doc.data();
        if (committeeData.committees && Array.isArray(committeeData.committees)) {
          const updatedCommittees = committeeData.committees.map(committee => {
            // Find the committee that matches the committee code
            if (committee.code === committees.committeecode) {
              // Filter out the task with the specified taskId
              const updatedTasks = committee.tasks.filter(task => task.taskname !== taskId);
              // Return the committee object with updated tasks
              return { ...committee, tasks: updatedTasks };
            }
            return committee; // Return unchanged if not the target committee
          });
  
          // Update the document with the updated committees array
          await documentRef.update({ committees: updatedCommittees });
  
          // Refresh the tasks after deletion
          fetchDataById();
        } else {
          console.log("Committees field is not an array or is undefined");
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
    <View style={styles.organizeeventependingtask}>
      <Text style={styles.pendingTasks}>Pending tasks</Text>
      <View style={styles.organizeeventependingtaskChild}>
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
      <Image
        style={styles.tasksIcon}
        contentFit="cover"
        source={require("../../assets/Tasks.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.colorDarkslateblue_100,
    borderRadius: 8,
    margin:20,
    padding: 20,
    marginBottom: 10,
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
    color:Color.colorWhite
  },
  description: {
    fontSize: 16,
    color:Color.colorWhite
  },
  status: {
    fontSize: 14,
    color:Color.colorWhite
  },
  pendingTasks: {
    top: 55,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.irishGroverRegular,
    width: 274,
    height: 54,
    textAlign: "left",
    color: Color.colorWhite,
    left: 29,
    position: "absolute",
  },
  organizeeventependingtaskChild: {
    top: 140,
    borderRadius: Border.br_9xl,
    backgroundColor: Color.colorWhite,
    width: 335,
    height: 608,
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
    left: 29,
    position: "absolute",
  },
  tasksIcon: {
    top: 34,
    left: 282,
    width: 77,
    height: 75,
    position: "absolute",
  },
  organizeeventependingtask: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});
export default Organizercommittependingtask;
