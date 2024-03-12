import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  // };

  return (
    <View style={styles.carouselContainer}>
      <TouchableOpacity style={styles.arrowButton} >
        {/* You can use your own left arrow image or icon */}
        <Image source={require('../assets/Back.png')} style={styles.arrowIcon} />
      </TouchableOpacity>

      <View style={styles.centerImageContainer}>
        {/* Display the current image in the center */}
        <Image source={require('../assets/Gateways.png')} style={styles.centerImage} />
      </View>

      <TouchableOpacity style={styles.arrowButton} >
        {/* You can use your own right arrow image or icon */}
        <Image source={require('../assets/Forward.png')} style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowButton: {
    padding: 10,
  },
  arrowIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  centerImageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  centerImage: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    resizeMode: 'cover',
  },
});

export default Carousel;
