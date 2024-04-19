import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { firebase } from '../../firebaseConfig'
import { FontSize, Color, FontFamily, Border } from "../../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";

const CommitteeDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { committees } = route.params;
  console.log(committees,"rrrr")
  const [progress, setProgress] = React.useState(100);
  const fetchCommitteeData = async () => {
    try {
        const db = firebase.firestore();
        const festRef = db.collection('festData').doc(committees.id);
        const doc = await festRef.get();

        if (doc.exists) {
            const committeeData = doc.data();
            const committeesData = committeeData.committees;

            // Filter events based on event name
            const filteredCommittee = committeesData.find(committee => committee.committeename === committees.committeename);

            if (filteredCommittee) {
              const totalTasks = filteredCommittee.tasks ? filteredCommittee.tasks.length : 0;
                let completedTasks = 0;

                if (filteredCommittee.tasks) {
                  // Iterate over tasks
                  filteredCommittee.tasks.forEach(task => {
                      if (task.status === 'completed') {
                          completedTasks++;
                      }
                  });
              }

              const percentage = totalTasks === 0 ? 100 : Math.round((completedTasks / totalTasks) * 100);

                console.log('Total number of tasks:', totalTasks);
                console.log('Completed tasks:', completedTasks);
                console.log('Progress:', percentage);

                setProgress(percentage);
            } else {
                console.log('Event not found with the specified name:', committees.committeename);
            }
        } else {
            console.log('No event found with the specified ID:', committees.id);
        }
    } catch (error) {
        console.error('Error fetching event data:', error);
    }
};


React.useEffect(() => {
  fetchCommitteeData();
}, [])

  return (
    <View style={styles.committeeDetails}>
      <Text style={[styles.itManager, styles.itManagerTypo]}>
  {committees ? committees.committeename : "No committees available"}
</Text>
      <Image
        style={styles.groupOfCompanies}
        contentFit="cover"
        source={require("../../assets/Group Of Companies.png")}
      />

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
      <TouchableOpacity onPress={()=>{navigation.navigate('Organizercommitteaddtask',{committees})}}>
<Image
        style={styles.tasklistIcon}
        contentFit="cover"
        source={require("../../assets/Tasklist-1.png")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('Organizercommittecompletedtask',{committees})}}>
<Image
        style={styles.tasklistIcon1}
        contentFit="cover"
        source={require("../../assets/Ok.png")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('Organizercommittependingtask',{committees})}}>
<Image
        style={styles.tasklistIcon2}
        contentFit="cover"
        source={require("../../assets/Tasks.png")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('Organizercommittememberslist',{committees})}}>
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
      >{`19   APR 
 2024
Friday`}</Text>
      
      
     
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
    left: 113,
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
  
  committeeDetails1: {
    top: 76,
    left: 19,
    fontSize: 32,
    width: 319,
    height: 45,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  groupOfCompanies: {
    top: 51,
    left: 293,
    width: 90,
    height: 90,
    position: "absolute",
  },
 
  committeeDetails: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    padding:10
  },
});

export default CommitteeDetails;
