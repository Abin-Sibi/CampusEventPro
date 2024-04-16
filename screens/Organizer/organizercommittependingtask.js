import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../../GlobalStyles";
import { useRoute } from "@react-navigation/native";
import { firebase } from '../../firebaseConfig'

const Organizercommittependingtask = () => {
  const route = useRoute();
  const { committees } = route.params;
  console.log(committees,"rrrr")
  const [pendingTasks, setPendingTasks] = React.useState([]);

  const fetchDataById = async () => {
    try {
      const db = firebase.firestore();
      const documentRef = db.collection('festData').doc(committees.id);
      const doc = await documentRef.get();
      
      if (doc.exists) {
        // Document found, extract its data
        const documentData = { id: doc.id, ...doc.data() };
        console.log("Document data:", documentData);

        if (documentData) {
          // Find the event within the festival by event name
          const committee = documentData.committees.find(committee => committee.committeename === committees.committeename);
      
          if (committee) {
            // Filter the tasks of the event to get only pending tasks
            const pendingTasks = committee.tasks.filter(task => task.status === "pending");
            console.log("this it the pendihng taks",pendingTasks)
            setPendingTasks(pendingTasks)
          } else {
            console.log("Event not found");
            return [];
          }
        } else {
          console.log("Festival not found");
          return [];
        }
      } else {
        console.log("Document not found");
        return null;
      }  
    } catch (error) {
      console.error("Error fetching document:", error);
      return null;
    }
  };

  React.useEffect(() => {
      fetchDataById();
  }, [])
  return (
    <View style={styles.organizeeventependingtask}>
      <Text style={styles.pendingTasks}>Pending tasks</Text>
      <View style={styles.organizeeventependingtaskChild} >
        {pendingTasks.map((task,index)=>{
          return(<View key={index} style={styles.card}>
            <View style={styles.content}>
              <View style={styles.leftContent}>
                <Text style={styles.taskName}>{task.taskname}</Text>
                <Text style={styles.description}>{task.description}</Text>
              </View>
              <View style={styles.rightContent}>
                <Text style={styles.status}>{task.status}</Text>
                <Text style={styles.status}>{task.duedate}</Text>
              </View>
            </View>
          </View>)
          
        })}
      
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
    top: 45,
    fontSize: FontSize.size_13xl,
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
