import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { useRoute } from "@react-navigation/native";
import { firebase } from '../../firebaseConfig'
const Eventtheadcompletedtask = () => {
  const route = useRoute();
  const { eventdata } = route.params;
  console.log(eventdata)
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
                    if (event.tasks && event.tasks.length > 0 && event.code === eventdata.eventcode) {
                        // Iterate through the tasks array of the event
                        event.tasks.forEach(task => {
                            // Check if the task status is pending
                            if (task.status === 'completed') {
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
React.useEffect(() => {
  fetchPendingTasks();
}, [])
  return (
    <View style={styles.eventheadpendingtask}>
      <View style={styles.eventheadpendingtaskChild} >
      {pendingTasks.map((task,index)=>{
          return(<View key={index} style={styles.card}>
            <View style={styles.content}>
              <View style={styles.leftContent}>
                <Text style={styles.taskName}>{task.taskData.taskname}</Text>
                <Text style={styles.description}>{task.taskData.description}</Text>
              </View>
              <View style={styles.rightContent}>
                <Text style={styles.status}>{task.taskData.status}</Text>
                <Text style={styles.status}>{task.taskData.duedate}</Text>
              </View>
            </View>
          </View>)
          
        })}
      </View>
      
      <Text style={[styles.pendingTasks, styles.taskFlexBox]}>
        Completed tasks
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

export default Eventtheadcompletedtask;
