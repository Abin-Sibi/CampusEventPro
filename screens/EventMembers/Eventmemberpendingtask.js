import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { firebase } from '../../firebaseConfig'

const Eventmemberpendingtask = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { taskData } = route.params;
  console.log(taskData)

  const [pendingTasks, setPendingTasks] = React.useState([]);
  const fetchPendingTasks = async () => {
    try {
        const db = firebase.firestore();
        const festRef = db.collection('festData');

        // Get the document snapshot
        const docSnapshot = await festRef.get();

        // Array to store pending tasks
        const pendingTasks = [];

        // Iterate through the documents
        docSnapshot.forEach(doc => {
            const events = doc.data().events;

            if (events && events.length > 0) {
                // Iterate through the events array
                events.forEach(event => {
                    if (event.tasks && event.tasks.length > 0 && event.code === taskData.code) {
                        // Iterate through the tasks array of the event
                        event.tasks.forEach(task => {
                            // Check if the task status is pending
                            if (task.status === 'pending') {
                                // Add the task to the pendingTasks array
                                pendingTasks.push({
                                    eventId: doc.id,
                                    eventName: event.eventname,
                                    taskData: task
                                });
                            }
                        });
                    }
                });
            }
        });

        console.log('Pending tasks:', pendingTasks);
        setPendingTasks(pendingTasks)
        return pendingTasks;
    } catch (error) {
        console.error('Error fetching pending tasks:', error);
        return [];
    }
};


const handleTaskCompletion = async (taskName) => {
  try {
      const db = firebase.firestore();
      const festRef = db.collection('festData');
      const docSnapshot = await festRef.get();
      
      docSnapshot.forEach(doc => {
          const events = doc.data().events;
         
          if (events && events.length > 0) {
              events.forEach(event => {
                  if (event.tasks && event.tasks.length > 0 && event.code === taskData.code) {
                      event.tasks.forEach(task => {
                        console.log("h i am i h e  r e",taskName)
                          if (task.status === 'pending' && task.taskname === taskName) {
                              // Update the task status to completed
                             
                              festRef.doc(doc.id).update({
                                  'events': events.map(e => {
                                      if (e.code === event.code) {
                                          return {
                                              ...e,
                                              tasks: e.tasks.map(t => {
                                                  if (t.taskname === taskName) {
                                                      return { ...t, status: 'completed' };
                                                  }
                                                  return t;
                                              })
                                          };
                                      }
                                      return e;
                                  })
                              });
                              console.log('Task status updated successfully');
                              fetchPendingTasks();
                          }
                      });
                  }
              });
          }
      });
  } catch (error) {
      console.error('Error updating task status:', error);
  }
};

React.useEffect(() => {
  fetchPendingTasks();
}, [])
  return (
    <View style={styles.eventheadpendingtask}>
      <View style={styles.eventheadpendingtaskChild} >
      {pendingTasks.map((task, index) => (
                <View key={index} style={styles.card}>
                  <View style={styles.content}>
              <View style={styles.leftContent}>
                <Text style={styles.taskName}>{task.taskData.taskname}</Text>
                <Text style={styles.description}>{task.taskData.description}</Text>
              </View>
              <View style={styles.rightContent}>
              <TouchableOpacity
                        style={styles.doneButton}
                        onPress={() => handleTaskCompletion(task.taskData.taskname)} // Pass the task ID to handleTaskCompletion
                    >
                        <Text style={styles.doneButtonText}>Done</Text>
                    </TouchableOpacity>
              </View>
            </View>
                    
                    {/* Render other task details */}
                </View>
            ))}
      </View>
      
      <Text style={[styles.pendingTasks, styles.taskFlexBox]}>
        Pending tasks
      </Text>
      <Image
        style={styles.tasksIcon}
        contentFit="cover"
        source={require("../../assets/Tasks.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  doneButton: {
    top: 10,
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 5,
},
doneButtonText: {
    color: 'white',
    fontWeight: 'bold',
},
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
    marginLeft: 5,
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
  
  taskFlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  eventheadpendingtaskChild: {
    top: 140,
    left: 29,
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
    position: "absolute",
  },
  pendingTasks: {
    top: 43,
    left: 38,
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.irishGroverRegular,
    width: 274,
    height: 54,
  },
  tasksIcon: {
    top: 22,
    left: 274,
    width: 77,
    height: 75,
    position: "absolute",
  },
  eventheadpendingtask: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Eventmemberpendingtask;
