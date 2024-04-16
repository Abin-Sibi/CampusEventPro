import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";


const Committeeheadpage = () => {
  const navigation = useNavigation();
  const route = useRoute();
const { committeedata } = route.params;
console.log(committeedata)
return (
  <View style={styles.eventtheadpage}>
    <Text style={[styles.eventHead, styles.eventHeadLayout]}>Committee Head</Text>
    <Image
      style={[styles.maleUserIcon, styles.iconLayout]}
      contentFit="cover"
      source={require("../../assets/Male User.png")}
    />
    <Image
      style={styles.calendarIcon}
      contentFit="cover"
      source={require("../../assets/Calendar.png")}
    />
    <Text
      style={[styles.feb2024Sunday, styles.tasklistIconPosition]}
    >{`28   FEB  
2024
Sunday`}</Text>
<TouchableOpacity onPress={()=>{navigation.navigate('Eventheadnotification')}}>
  <Image
      style={styles.unreadMessagesIcon}
      contentFit="cover"
      source={require("../../assets/Unread messages.png")}
    />
</TouchableOpacity>
<TouchableOpacity onPress={()=>{navigation.navigate('Committeeheadaddtask',{committeedata})}}>
    <Image
      style={[styles.tasklistIcon, styles.tasklistIconPosition]}
      contentFit="cover"
      source={require("../../assets/Tasklist.png")}
    />
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{navigation.navigate('Committeheadteammembers',{committeedata})}}>
      <Image
      style={[styles.peopleIcon, styles.iconLayout]}
      contentFit="cover"
      source={require("../../assets/People.png")}
    />
    </TouchableOpacity>
    
    <Text style={[styles.addTask, styles.addTypo]}>add task</Text>
    <Text style={[styles.committeeMembers, styles.tasksLayout]}>
      Committee members
    </Text>
    <Image
      style={[styles.loadingBarIcon, styles.eventHeadLayout]}
      contentFit="cover"
      source={require("../../assets/Loading Bar.png")}
    />
    <Text style={[styles.pendingTasks, styles.tasksLayout]}>
      Pending Tasks
    </Text>
    <TouchableOpacity onPress={()=>{navigation.navigate('Committeeheadcompletedtask',{committeedata})}}>
      <Image
      style={[styles.okIcon, styles.iconPosition]}
      contentFit="cover"
      source={require("../../assets/Ok.png")}
    />
    </TouchableOpacity>
    
    <Text style={[styles.completedTasks, styles.tasksLayout]}>
      completed Tasks
    </Text>
    <Text style={[styles.monitorProgress, styles.eventHeadTypo]}>
      Monitor Progress
    </Text>
    <TouchableOpacity onPress={()=>{navigation.navigate('CommitteheadCommittememberdetails',{committeedata})}}>
      <Image
      style={styles.peopleIcon1}
      contentFit="cover"
      source={require("../../assets/People.png")}
    />
    </TouchableOpacity>
    
    <TouchableOpacity onPress={()=>{navigation.navigate('Committeeheadpendingtask',{committeedata})}}>
      <Image
      style={[styles.tasksIcon, styles.iconPosition]}
      contentFit="cover"
      source={require("../../assets/Tasks.png")}
    />
    </TouchableOpacity>
    
    <Text style={[styles.addMembers, styles.addTypo]}>Add members</Text>
  </View>
);
};

const styles = StyleSheet.create({
eventHeadLayout: {
  height: 63,
  position: "absolute",
},
iconLayout: {
  height: 90,
  width: 90,
  position: "absolute",
},
tasklistIconPosition: {
  left: 28,
  position: "absolute",
},
addTypo: {
  fontSize: FontSize.size_base,
  top: 347,
  textAlign: "left",
  color: Color.colorWhite,
  fontFamily: FontFamily.irishGroverRegular,
  position: "absolute",
},
tasksLayout: {
  height: 54,
  width: 274,
  left: 119,
  textAlign: "left",
  color: Color.colorWhite,
  fontFamily: FontFamily.irishGroverRegular,
  position: "absolute",
},
iconPosition: {
  left: 32,
  position: "absolute",
},
eventHeadTypo: {
  textAlign: "left",
  color: Color.colorWhite,
  fontFamily: FontFamily.irishGroverRegular,
},
eventHead: {
  top: 28,
  left: 7,
  fontSize: FontSize.size_17xl,
  width: 379,
  textAlign: "left",
  color: Color.colorWhite,
  fontFamily: FontFamily.irishGroverRegular,
},
maleUserIcon: {
  top: 7,
  left: 296,
},
calendarIcon: {
  top: 124,
  left: 154,
  width: 160,
  height: 107,
  position: "absolute",
},
feb2024Sunday: {
  top: 122,
  width: 224,
  height: 132,
  fontSize: FontSize.size_13xl,
  textAlign: "left",
  color: Color.colorWhite,
  fontFamily: FontFamily.irishGroverRegular,
},
unreadMessagesIcon: {
  top: 97,
  width: 74,
  height: 49,
  left: 296,
  position: "absolute",
},
tasklistIcon: {
  top: 254,
  width: 93,
  height: 93,
},
peopleIcon: {
  top: 257,
  left: 264,
},
addTask: {
  width: 196,
  height: 40,
  left: 37,
},
committeeMembers: {
  top: 714,
  fontSize: FontSize.size_5xl,
},
loadingBarIcon: {
  top: 404,
  left: 70,
  width: 226,
},
pendingTasks: {
  top: 602,
  fontSize: FontSize.size_13xl,
},
okIcon: {
  top: 504,
  width: 81,
  height: 67,
},
completedTasks: {
  top: 517,
  fontSize: FontSize.size_13xl,
},
monitorProgress: {
  top: 377,
  left: 98,
  width: 267,
  height: 26,
  fontSize: FontSize.size_5xl,
  position: "absolute",
},
peopleIcon1: {
  top: 682,
  width: 67,
  height: 94,
  left: 37,
  position: "absolute",
},
tasksIcon: {
  top: 589,
  width: 77,
  height: 75,
},
addMembers: {
  left: 251,
  width: 119,
  height: 15,
},
eventtheadpage: {
  backgroundColor: Color.colorDarkslateblue_200,
  flex: 1,
  width: "100%",
  height: 852,
  overflow: "hidden",
},
});


export default Committeeheadpage;
