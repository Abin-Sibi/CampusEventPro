import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import { useNavigation, useRoute } from "@react-navigation/native";

const Eventmemberspage = () => {
    const navigation = useNavigation();
    const route = useRoute();
  const { taskData } = route.params;
  console.log(taskData)
  return (
    <View style={styles.eventmemberspage}>
      <Text style={[styles.goodMorning, styles.logOutTypo]}>Good Morning</Text>
      <Image
        style={[styles.calendarIcon, styles.calendarIconPosition]}
        contentFit="cover"
        source={require("../assets/Calendar.png")}
      />
      <Text
        style={[styles.feb2024Sunday, styles.calendarIconPosition]}
      >{`28   FEB  2024
Sunday`}</Text>
<TouchableOpacity onPress={()=>{navigation.navigate('Eventmembernotification')}}>
    <Image
        style={styles.unreadMessagesIcon}
        contentFit="cover"
        source={require("../assets/Unread messages.png")}
      />
</TouchableOpacity>
      
      <View
        style={[styles.eventmemberspageChild, styles.eventmemberspageShadowBox]}
      />
      <View
        style={[styles.eventmemberspageItem, styles.eventmemberspageShadowBox]}
      />
      <TouchableOpacity onPress={()=>{navigation.navigate('Eventmembercompletedtask',{taskData})}}>
        <Image
        style={styles.okIcon}
        contentFit="cover"
        source={require("../assets/Ok.png")}
      />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>{navigation.navigate('Eventmemberpendingtask',{taskData})}}>
        <Image
        style={styles.tasklistIcon}
        contentFit="cover"
        source={require("../assets/Tasklist.png")}
      />
      </TouchableOpacity>
      
      <Text style={[styles.pendingTask, styles.taskTypo]}>Pending task</Text>
      <Text style={[styles.completedTask, styles.taskTypo]}>{`Completed task
`}</Text>
      <View
        style={[styles.eventmemberspageInner, styles.rectangleViewShadowBox]}
      />
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Text style={[styles.generateReports, styles.contactDetailsTypo]}>
        Generate Reports
      </Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('Eventmenbercontactdeatils')}}>
        <Image
        style={styles.phoneContactIcon}
        contentFit="cover"
        source={require("../assets/Phone Contact.png")}
      />
      </TouchableOpacity>
      
      <Text style={[styles.contactDetails, styles.contactDetailsTypo]}>
        Contact Details
      </Text>
      <View style={styles.eventmemberspageChild1} />
      <TouchableOpacity onPress={()=>{navigation.navigate('Eventmembergeneratereports')}}>
        <Image
        style={styles.businessReportIcon}
        contentFit="cover"
        source={require("../assets/Business Report.png")}
      />
      </TouchableOpacity>
      
      <Text style={[styles.logOut, styles.logOutTypo]}>Log Out</Text>
      <Image
        style={styles.maleUserIcon}
        contentFit="cover"
        source={require("../assets/Male User.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logOutTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
  },
  calendarIconPosition: {
    top: 168,
    position: "absolute",
  },
  eventmemberspageShadowBox: {
    height: 123,
    top: 384,
    width: 139,
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
    backgroundColor: Color.colorDarkslateblue_100,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  taskTypo: {
    fontSize: FontSize.size_base,
    top: 464,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    top: 561,
    height: 123,
    width: 139,
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
    backgroundColor: Color.colorDarkslateblue_100,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  contactDetailsTypo: {
    top: 644,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  goodMorning: {
    top: 22,
    left: 21,
    width: 267,
    height: 43,
    fontSize: FontSize.size_17xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    position: "absolute",
  },
  calendarIcon: {
    left: 160,
    height: 137,
    width: 138,
  },
  feb2024Sunday: {
    width: 184,
    height: 85,
    left: 30,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.irishGroverRegular,
    fontSize: FontSize.size_17xl,
  },
  unreadMessagesIcon: {
    top: 119,
    left: 298,
    width: 74,
    height: 49,
    position: "absolute",
  },
  eventmemberspageChild: {
    left: 30,
  },
  eventmemberspageItem: {
    left: 219,
  },
  okIcon: {
    top: 397,
    left: 248,
    width: 81,
    height: 67,
    position: "absolute",
  },
  tasklistIcon: {
    top: 395,
    left: 56,
    width: 86,
    height: 69,
    position: "absolute",
  },
  pendingTask: {
    left: 45,
    height: 21,
    width: 138,
  },
  completedTask: {
    width: 232,
    height: 14,
    left: 242,
  },
  eventmemberspageInner: {
    left: 30,
  },
  rectangleView: {
    left: 219,
  },
  generateReports: {
    left: 38,
    height: 22,
    width: 139,
    top: 644,
  },
  phoneContactIcon: {
    top: 571,
    left: 252,
    width: 73,
    height: 66,
    position: "absolute",
  },
  contactDetails: {
    width: 140,
    height: 19,
    left: 242,
  },
  eventmemberspageChild1: {
    top: 748,
    left: 130,
    width: 126,
    height: 57,
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
    backgroundColor: Color.colorDarkslateblue_100,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  businessReportIcon: {
    top: 576,
    left: 60,
    width: 67,
    height: 61,
    position: "absolute",
  },
  logOut: {
    top: 754,
    left: 152,
    fontSize: FontSize.size_5xl,
    width: 124,
    height: 28,
    position: "absolute",
  },
  maleUserIcon: {
    top: 12,
    left: 276,
    width: 90,
    height: 90,
    position: "absolute",
  },
  eventmemberspage: {
    backgroundColor: Color.colorDarkslateblue_200,
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Eventmemberspage;
