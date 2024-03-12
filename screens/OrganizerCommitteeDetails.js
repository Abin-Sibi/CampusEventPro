import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const OrganizerCommitteeDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.organizercommitteeDetails}>
      <Text style={[styles.docsCommittee, styles.docsCommitteeTypo]}>
        Docs Committee
      </Text>
      <Image
        style={[styles.documentsIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/Documents.png")}
      />
      <Text style={[styles.monitorProgress, styles.docsCommitteeTypo]}>
        Monitor Progress
      </Text>
      <Image
        style={styles.loadingBarIcon}
        contentFit="cover"
        source={require("../assets/Loading Bar.png")}
      />
      <TouchableOpacity onPress={()=>{navigation.navigate('Organizercommitteaddtask')}}>
      <Image
        style={styles.tasklistIcon}
        contentFit="cover"
        source={require("../assets/Tasklist-1.png")}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Organizercommittecompletedtask')}}>
<Image
        style={styles.tasklistIcon1}
        contentFit="cover"
        source={require("../assets/Ok.png")}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Organizercommittependingtask')}}>
<Image
        style={styles.tasklistIcon2}
        contentFit="cover"
        source={require("../assets/Tasks.png")}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Organizercommittememberslist')}}>
<Image
        style={styles.tasklistIcon3}
        contentFit="cover"
        source={require("../assets/People.png")}
      />
      </TouchableOpacity>
      
      
      
      
      <Text style={[styles.assignTask, styles.tasksLayout]}>Assign Task</Text>
      <Text style={[styles.pendingTasks, styles.tasksLayout]}>
        Pending Tasks
      </Text>
      <Text style={[styles.committeeMembers, styles.tasksLayout]}>
        completed Tasks
      </Text>
      <Text style={[styles.completedTasks, styles.tasksLayout]}>
      Committee members
      </Text>
      <Image
        style={[styles.calendarIcon, styles.calendarIconPosition]}
        contentFit="cover"
        source={require("../assets/Calendar.png")}
      />
      <Text
        style={[styles.feb2024Sunday, styles.calendarIconPosition]}
      >{`28   FEB 
 2024
Sunday`}</Text>

<TouchableOpacity onPress={()=>{navigation.navigate('Organizernotification')}}>
      <Image
        style={[styles.unreadMessagesIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/Unread messages.png")}
      />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  docsCommitteeTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
  },
  iconPosition: {
    left: 314,
    position: "absolute",
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
  docsCommittee: {
    fontSize: FontSize.size_17xl,
    width: 294,
    left: 20,
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    top: 55,
    position: "absolute",
  },
  documentsIcon: {
    width: 59,
    height: 60,
    top: 55,
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
    top: 453,
    left: 24,
    width: 69,
    height: 77,
    position: "absolute",
  },
  tasklistIcon1: {
    top: 720,
    left: 24,
    width: 69,
    height: 77,
    position: "absolute",
  },
  tasklistIcon2: {
    top: 630,
    left: 24,
    width: 69,
    height: 77,
    position: "absolute",
  },
  tasklistIcon3: {
    top: 533,
    left: 24,
    width: 69,
    height: 77,
    position: "absolute",
  },
  assignTask: {
    top: 476,
    fontSize: FontSize.size_13xl,
  },
  pendingTasks: {
    top: 646,
    fontSize: FontSize.size_13xl,
  },
  committeeMembers: {
    top: 748,
    fontSize: FontSize.size_xl,
  },
  completedTasks: {
    top: 561,
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
    width: 74,
    height: 49,
  },
  organizercommitteeDetails: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default OrganizerCommitteeDetails;
