
import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily } from "../GlobalStyles";

function MemberTask() {
    return (
        <View style={styles.rectangleParent}>
          <View style={styles.groupChild} />
          <Text style={[styles.task1, styles.task1Typo]}>Task 1</Text>
          <Image
            style={styles.tickBoxIcon}
            contentFit="cover"
            source={require("../assets/Tick Box.png")}
          />
          <Text style={[styles.dueDate, styles.task1Typo]}>Due Date</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      task1Typo: {
        textAlign: "left",
        color: Color.colorBlack,
        fontFamily: FontFamily.itimRegular,
        position: "absolute",
      },
      groupChild: {
        top: 0,
        left: 0,
        borderRadius: 7,
        backgroundColor: "#defafe",
        width: 262,
        position: "absolute",
        height: 67,
      },
      task1: {
        top: 5,
        left: 18,
        fontSize: 24,
      },
      tickBoxIcon: {
        top: 19,
        left: 204,
        width: 58,
        height: 28,
        position: "absolute",
      },
      dueDate: {
        top: 41,
        left: 21,
        fontSize: 14,
        width: 110,
        height: 17,
      },
      rectangleParent: {
        flex: 1,
        width: "100%",
        height: 67,
      },
    });

export default MemberTask;
