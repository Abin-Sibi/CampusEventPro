import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Committeeheadpage = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.committeeheadpage}>
      <Text style={[styles.committeeHead, styles.committeeHeadLayout]}>
        Committee Head
      </Text>
      <Image
        style={[styles.maleUserIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/Male User.png")}
      />
      <Image
        style={styles.calendarIcon}
        contentFit="cover"
        source={require("../assets/Calendar.png")}
      />
      <Text
        style={[styles.feb2024Sunday, styles.tasklistIconPosition]}
      >{`28   FEB  
2024
Sunday`}</Text>
<TouchableOpacity onPress={()=>{navigation.navigate('Committeeheadnotification')}}>
    <Image
        style={styles.unreadMessagesIcon}
        contentFit="cover"
        source={require("../assets/Unread messages.png")}
      />
</TouchableOpacity>
<TouchableOpacity onPress={()=>{navigation.navigate('Committeeheadaddtask')}}>
      <Image
        style={[styles.tasklistIcon, styles.tasklistIconPosition]}
        contentFit="cover"
        source={require("../assets/Tasklist-1.png")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('Committeheadteammembers')}}>

      <Image
        style={[styles.peopleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/People.png")}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('Committeeheadcompletedtask')}}>
      <Image
        style={[styles.okIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/Ok.png")}
      />
      </TouchableOpacity>
      <Text style={[styles.committeeMembers, styles.tasksLayout]}>
        Committee members
      </Text>
      <Image
        style={[styles.loadingBarIcon, styles.committeeHeadLayout]}
        contentFit="cover"
        source={require("../assets/Loading Bar.png")}
      />
      <TouchableOpacity onPress={()=>{navigation.navigate('Committeeheadpendingtask')}}>
<Image
        style={[styles.tasksIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/Tasks.png")}
      />
      </TouchableOpacity>
      
      <Text style={[styles.monitorProgress, styles.committeeHeadTypo]}>
        Monitor Progress
      </Text>
      <Text style={[styles.completedTasks, styles.tasksLayout]}>
        completed Tasks
      </Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('Committeheadcommittememberdeta')}}>
        <Image
        style={styles.peopleIcon1}
        contentFit="cover"
        source={require("../assets/People.png")}
      />
      </TouchableOpacity>
      
      <Text style={[styles.pendingTasks, styles.tasksLayout]}>
        Pending Tasks
      </Text>
      <Text style={[styles.addTask, styles.addTypo]}>add task</Text>
      <Text style={[styles.addMembers, styles.addTypo]}>Add members</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  committeeHeadLayout: {
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
  iconPosition: {
    left: 32,
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
  committeeHeadTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
  },
  addTypo: {
    fontSize: FontSize.size_base,
    top: 347,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  committeeHead: {
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
  okIcon: {
    top: 504,
    width: 81,
    height: 67,
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
  tasksIcon: {
    top: 589,
    width: 77,
    height: 75,
  },
  monitorProgress: {
    top: 377,
    left: 98,
    width: 267,
    height: 26,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  completedTasks: {
    top: 517,
    fontSize: FontSize.size_13xl,
  },
  peopleIcon1: {
    top: 682,
    width: 67,
    height: 94,
    left: 37,
    position: "absolute",
  },
  pendingTasks: {
    top: 602,
    fontSize: FontSize.size_13xl,
  },
  addTask: {
    width: 196,
    height: 40,
    left: 37,
  },
  addMembers: {
    left: 251,
    width: 119,
    height: 15,
  },
  committeeheadpage: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Committeeheadpage;
