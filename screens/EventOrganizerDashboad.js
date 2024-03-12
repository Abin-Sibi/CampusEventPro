import * as React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity,Modal,TextInput,Button, } from "react-native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";
import {useNavigation } from "@react-navigation/native"

const EventOrganizerDashboad = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.eventOrganizerDashboard}>
      <View style={styles.eventOrganizerDashboadChild} />
      <Text style={[styles.eventOrganizer, styles.wannaCreateATypo]}>
        Event Organizer
      </Text>
      <Image
        style={[styles.menuIcon, styles.menuIconPosition]}
        resizeMode="cover"
        source={require("../assets/menu.png")}
      />
      <Image
        style={styles.maleUserIcon}
        resizeMode="cover"
        source={require("../assets/Male User.png")}
      />
      <View
        style={[styles.eventOrganizerDashboadItem, styles.eventShadowBox]}
      />
      <Text style={[styles.gateWays, styles.gateWaysTypo]}>Gate Ways</Text>
      <Text style={[styles.startDate20012024, styles.startTypo]}>
        Start Date: 20-01-2024
      </Text>
      <Image
        style={[styles.calendarIcon, styles.calendarIconLayout]}
        resizeMode="cover"
        source={require("../assets/cal.png")}
      />
      <TouchableOpacity onPress={()=>{navigation.navigate("EventOrganizer")}}>
      <Image
        style={[styles.openedFolderIcon, styles.openedIconLayout]}
        resizeMode="cover"
        source={require("../assets/Opened Folder.png")}
        
      />
      </TouchableOpacity>
      
      <View
        style={[styles.eventOrganizerDashboadInner, styles.eventShadowBox]}
      />
      <Text style={[styles.interfaces, styles.gateWaysTypo]}>Interfaces</Text>
      <Text style={[styles.startDate10032024, styles.startTypo]}>
        Start Date: 10-03-2024
      </Text>
      <Image
        style={[styles.calendarIcon1, styles.calendarIconLayout]}
        resizeMode="cover"
        source={require("../assets/cal.png")}
      />
      <Image
        style={[styles.openedFolderIcon1, styles.openedIconLayout]}
        resizeMode="cover"
        source={require("../assets/Opened Folder.png")}
      />
      
      <Text style={[styles.wannaCreateA, styles.menuIconPosition]}>
        Wanna Create a New Fest ,Click Here...
      </Text>
      <TouchableOpacity onPress={toggleModal}>
        <Image
          style={[styles.makeFest]}
          resizeMode="cover"
          source={require("../assets/Sum.png")}
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Create Fest</Text>
            {/* Fest Name Input */}
            <TextInput
              style={styles.input}
              placeholder="Fest Name"
              // Add necessary props for handling the input
            />
            {/* Poster Image Input */}
            <TextInput
              style={styles.input}
              placeholder="Poster Image"
              // Add necessary props for handling the input
            />
            {/* Start Date Input */}
            {/* You can use a date picker library or implement your own */}
            <TextInput
              style={styles.input}
              placeholder="Start Date"
              // Add necessary props for handling the input
            />
            <Button title="Create Fest" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wannaCreateATypo: {
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
  },
  makeFest:{
left:150,
top:510
  },
  menuIconPosition: {
    left: 28,
    position: "absolute",
  },
  eventShadowBox: {
    height: 182,
    width: 325,
    left: 28,
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
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_6xl,
    position: "absolute",
  },
  gateWaysTypo: {
    height: 47,
    width: 120,
    left: 70,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  startTypo: {
    height: 28,
    width: 146,
    fontSize: FontSize.size_sm,
    left: 71,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  calendarIconLayout: {
    height: 130,
    width: 87,
    left: 231,
    position: "absolute",
  },
  openedIconLayout: {
    height: 34,
    width: 33,
    left: 297,
    position: "absolute",
  },
  eventOrganizerDashboadChild: {
    left: 10,
    width: 373,
    height: 48,
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
    backgroundColor: Color.colorSkyblue,
    borderRadius: Border.br_6xl,
    top: 12,
    position: "absolute",
  },
  eventOrganizer: {
    top: 22,
    left: 114,
    color: Color.colorBlack,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    position: "absolute",
  },
  menuIcon: {
    top: 24,
    width: 27,
    height: 25,
  },
  maleUserIcon: {
    left: 330,
    width: 47,
    height: 50,
    top: 12,
    position: "absolute",
  },
  eventOrganizerDashboadItem: {
    top: 107,
  },
  gateWays: {
    top: 167,
  },
  startDate20012024: {
    top: 211,
  },
  calendarIcon: {
    top: 135,
  },
  openedFolderIcon: {
    top: 248,
  },
  eventOrganizerDashboadInner: {
    top: 316,
  },
  interfaces: {
    top: 376,
  },
  startDate10032024: {
    top: 420,
  },
  calendarIcon1: {
    top: 344,
  },
  openedFolderIcon1: {
    top: 457,
  },
  wannaCreateA: {
    top: 567,
    fontSize: 20,
    color: "#676666",
    textAlign: "left",
    fontFamily: FontFamily.itimRegular,
    left: 28,
  },
  eventOrganizerDashboad: {
    backgroundColor: "#defafe",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width:300,
    backgroundColor: Color.colorSkyblue,
    padding: 20,
    borderRadius: Border.br_6xl,
    elevation: 5,
  },
  modalHeading: {
    fontSize: FontSize.size_5xl,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
});

export default EventOrganizerDashboad;
