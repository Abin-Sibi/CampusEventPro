import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Color } from '../GlobalStyles';

const EventCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftContent}>
        <Text style={styles.festName}>GateWays</Text>
        <Text style={styles.daysLeft}>11 Days Left</Text>
        <Text style={styles.startDate}>20-20-2000</Text>
      </View>

      <View style={styles.rightContent}>
        <Image source={require('../assets/cal.png')} style={styles.cardImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:Color.colorSkyblue,
    padding: 20,
    borderRadius: 10,
    margin: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    height:200
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    marginLeft: 12,
  },
  festName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'black'
  },
  daysLeft: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
  startDate: {
    fontSize: 18,
  },
  cardImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
});

export default EventCard;
