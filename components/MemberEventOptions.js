
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

function MemberEventOptions() {
    return (
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <View style={[styles.groupItem, styles.groupShadowBox]} />
          <Text style={[styles.venueTracker, styles.eventTypo]}>Venue Tracker</Text>
          <Text style={[styles.eventName, styles.eventTypo]}>Event Name</Text>
          <Text style={[styles.currentEventLifecycle, styles.eventTypo]}>
            Current Event LifeCycle
          </Text>
          <Text style={[styles.lastUpdatedat, styles.eventTypo]}>
            Last UpdatedAt : 24/01/2024
          </Text>
          <View style={[styles.groupInner, styles.groupShadowBox]} />
          <Text style={[styles.monitorProgress, styles.eventTypo]}>
            Monitor Progress
          </Text>
          <Image
            style={styles.fileAndFolder}
            contentFit="cover"
            source={require("../assets/cal.png")}
          />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      groupShadowBox: {
        height: 32,
        borderRadius: Border.br_3xs,
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
      eventTypo: {
        textAlign: "left",
        color: Color.colorBlack,
        fontFamily: FontFamily.itimRegular,
        position: "absolute",
      },
      groupChild: {
        top: 0,
        left: 0,
        borderRadius: 25,
        backgroundColor: "#7bceda",
        width: 325,
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
        height: 278,
      },
      groupItem: {
        top: 176,
        left: 14,
        width: 286,
        backgroundColor:Color.colorSblue,
      },
      venueTracker: {
        top: 181,
        fontSize: FontSize.size_base,
        color: Color.colorBlack,
        fontFamily: FontFamily.itimRegular,
        left: 35,
        
      },
      eventName: {
        top: 27,
        left: 45,
        fontSize: 24,
      },
      currentEventLifecycle: {
        top: 56,
        left: 36,
        fontSize: 14,
      },
      lastUpdatedat: {
        top: 72,
        fontSize: 12,
        left: 35,
        color: Color.colorBlack,
        fontFamily: FontFamily.itimRegular,
      },
      groupInner: {
        top: 123,
        left: 15,
        width: 285,
        backgroundColor:Color.colorSblue,
      },
      monitorProgress: {
        top: 130,
        fontSize: FontSize.size_base,
        color: Color.colorBlack,
        fontFamily: FontFamily.itimRegular,
        left: 35,
      },
      fileAndFolder: {
        top: 24,
        left: 209,
        width: 91,
        height: 71,
        position: "absolute",
      },
      rectangleParent: {
        top:40,
        width: "100%",
        height: 378,
        left:40
      },
    });

export default MemberEventOptions


