import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { firebase } from '../../firebaseConfig'
import { Color, FontFamily, FontSize } from "../../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";

const EventDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { events } = route.params;
  console.log(events,"rrrr")
  const [progress, setProgress] = React.useState(100);
  const fetchEventData = async () => {
    try {
        const db = firebase.firestore();
        const festRef = db.collection('festData').doc(events.id);
        const doc = await festRef.get();

        if (doc.exists) {
            const eventData = doc.data();
            const eventsData = eventData.events;

            // Filter events based on event name
            const filteredEvent = eventsData.find(event => event.eventname === events.eventname);

            if (filteredEvent) {
                const totalTasks = filteredEvent.tasks.length;
                let completedTasks = 0;

                // Count completed tasks
                filteredEvent.tasks.forEach(task => {
                    if (task.status === 'completed') {
                        completedTasks++;
                    }
                });

                const percentage = Math.round((completedTasks / totalTasks) * 100);

                console.log('Total number of tasks:', totalTasks);
                console.log('Completed tasks:', completedTasks);
                console.log('Progress:', percentage);

                setProgress(percentage);
            } else {
                console.log('Event not found with the specified name:', events.eventname);
            }
        } else {
            console.log('No event found with the specified ID:', events.id);
        }
    } catch (error) {
        console.error('Error fetching event data:', error);
    }
};


React.useEffect(() => {
  fetchEventData();
}, [])
  
  return (
    <View style={styles.eventDetails}>
      <Text style={[styles.itManager, styles.itManagerTypo]}>IT Manager</Text>
      <Text style={[styles.monitorProgress, styles.itManagerTypo]}>
        Monitor Progress
      </Text>
      <View style={styles.container}>
    <View style={[
        styles.progressBar,
        { width: `${progress}%` },
        progress === 0 ? styles.redProgressBar : null
    ]}>
        <Text style={styles.progressText}>{progress}%</Text>
    </View>
</View>
      <TouchableOpacity onPress={()=>{navigation.navigate('Organizereventeaddtask',{events})}}>
<Image
        style={styles.tasklistIcon}
        contentFit="cover"
        source={require("../../assets/Tasklist-1.png")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('Organizereventcompletedtask',{events})}}>
<Image
        style={styles.tasklistIcon1}
        contentFit="cover"
        source={require("../../assets/Ok.png")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('Organizeeventependingtask',{events})}}>
<Image
        style={styles.tasklistIcon2}
        contentFit="cover"
        source={require("../../assets/Tasks.png")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('Organizereventmeberslist',{events})}}>
<Image
        style={styles.tasklistIcon3}
        contentFit="cover"
        source={require("../../assets/People.png")}
      />
      </TouchableOpacity>
      
      <Text style={[styles.assignTask, styles.tasksLayout]}>Assign Task</Text>
      
      <Text style={[styles.pendingTasks, styles.tasksLayout]}>
        Pending Tasks
      </Text>
      
      <Text style={[styles.committeeMembers, styles.tasksLayout]}>
        Committee members
      </Text>
     
      <Text style={[styles.completedTasks, styles.tasksLayout]}>
        completed Tasks
      </Text>
      <Image
        style={[styles.calendarIcon, styles.calendarIconPosition]}
        contentFit="cover"
        source={require("../../assets/Calendar.png")}
      />
      <Text
        style={[styles.feb2024Sunday, styles.calendarIconPosition]}
      >{`28   FEB 
 2024
Sunday`}</Text>
<TouchableOpacity onPress={()=>{navigation.navigate('Organizereventnotification')}}>
  <Image
        style={styles.unreadMessagesIcon}
        contentFit="cover"
        source={require("../../assets/Unread messages.png")}
      />
</TouchableOpacity>
      
      <Image
        style={styles.maleUserIcon}
        contentFit="cover"
        source={require("../../assets/Male User.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  redProgressBar: {
    backgroundColor: 'red',
    width: '100%'
},
  container: {
    width: '70%',
    top:390,
    left:60,
    height: 30,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
},
progressBar: {
    height: '100%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
},
progressText: {
    color: 'white',
    fontWeight: 'bold',
},
  itManagerTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
  },
  tasksLayout: {
    height: 54,
    width: 274,
    left: 103,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  calendarIconPosition: {
    top: 184,
    position: "absolute",
  },
  itManager: {
    top: 55,
    fontSize: FontSize.size_17xl,
    width: 294,
    left: 20,
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  monitorProgress: {
    top: 332,
    left: 86,
    width: 267,
    height: 26,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  loadingBarIcon: {
    top: 359,
    left: 58,
    width: 226,
    height: 63,
    position: "absolute",
  },
  tasklistIcon: {
    top: 400,
    left: 0,
    width: 86,
    height: 71,
    position: "absolute",
  },
  tasklistIcon1:{
    top: 490,
    left: 0,
    width: 86,
    height: 71,
    position: "absolute",
  },
  tasklistIcon2:{
    top: 580,
    left: 0,
    width: 86,
    height: 71,
    position: "absolute",
  },
  tasklistIcon3:{
    top: 670,
    left: 10,
    width: 86,
    height: 71,
    position: "absolute",
  },
  assignTask: {
    top: 456,
    fontSize: FontSize.size_13xl,
  },
  pendingTasks: {
    top: 636,
    fontSize: FontSize.size_13xl,
  },
  committeeMembers: {
    top: 716,
    fontSize: FontSize.size_13xl,
  },
  completedTasks: {
    top: 540,
    fontSize: FontSize.size_13xl,
  },
  calendarIcon: {
    left: 134,
    width: 124,
    height: 109,
  },
  feb2024Sunday: {
    width: 321,
    height: 161,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    left: 20,
  },
  unreadMessagesIcon: {
    top: 139,
    left: 314,
    width: 74,
    height: 49,
    position: "absolute",
  },
  maleUserIcon: {
    top: 35,
    left: 269,
    width: 90,
    height: 90,
    position: "absolute",
  },
  eventDetails: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default EventDetails;
