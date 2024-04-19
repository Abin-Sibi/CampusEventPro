import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../../GlobalStyles";
import { useRoute } from "@react-navigation/native";
import { firebase } from '../../firebaseConfig';

const Eventheadpendingtask = () => {
  const route = useRoute();
  const { eventdata } = route.params;
  const [pendingTasks, setPendingTasks] = React.useState([]);
  const [loading, setLoading] = React.useState(true); // Loading state
  const [abin,setAbin]= React.useState([]);

  const fetchPendingTasks = async () => {
    try {
      const db = firebase.firestore();
      const festRef = db.collection('festData');
      const docSnapshot = await festRef.get();
      const pendingTasks = [];

      docSnapshot.forEach(doc => {
        const events = doc.data().events;
        console.log("oooooooooo",doc.data())
setAbin(events)
        if (events && events.length > 0) {
          events.forEach(event => {
            if (event.tasks && event.tasks.length > 0 && event.code === eventdata.eventcode) {
              event.tasks.forEach(task => {
                if (task.status === 'pending') {
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

      setPendingTasks(pendingTasks);
      setLoading(false); // Set loading to false after fetching tasks
      return pendingTasks;
    } catch (error) {
      console.error('Error fetching pending tasks:', error);
      setLoading(false); // Set loading to false in case of error
      return [];
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const db = firebase.firestore();
      const festRef = db.collection('festData');
      
      const docSnapshot = await festRef.get();
  
      docSnapshot.forEach(doc => {
        const events = doc.data().events;
        console.log("jjjj",doc.data())
        if (abin && abin.length > 0) {
          abin.forEach(event => {
            if (event.tasks && event.tasks.length > 0 && event.code === eventdata.eventcode) {
              const updatedTasks = event.tasks.filter(task => task.taskname !== taskId);
              event.tasks = updatedTasks;
            }
          });
        }
  
        // Update the document with the modified events
        db.collection('festData').doc(doc.id).update({ events: events });
      });
  
      // Fetch updated pending tasks
      fetchPendingTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  React.useEffect(() => {
    const fetchEvents = async () => {
      await fetchPendingTasks();
     
    };
    fetchEvents();
  }, []);

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

  if (loading) {
    return <ActivityIndicator style={styles.loadingIndicator} size="large" color={Color.colorDarkslateblue_100} />;
  }

  return (
    <View style={styles.eventheadpendingtask}>
      <View style={styles.eventheadpendingtaskChild}>
        {pendingTasks.map((task, index) => (
          <TouchableOpacity
            key={index}
            onLongPress={() => handleLongPress(task.taskData.taskname)}
            style={styles.card}
          >
            <View style={styles.content}>
              <View style={styles.leftContent}>
                <Text style={styles.taskName}>{task.taskData.taskname}</Text>
                <Text style={styles.description}>{task.taskData.description}</Text>
              </View>
              <View style={styles.rightContent}>
                <Text style={styles.status}>{task.taskData.status}</Text>
                <Text style={styles.status}>{new Date(task.taskData.duedate.seconds * 1000).toLocaleDateString()}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default Eventheadpendingtask;
