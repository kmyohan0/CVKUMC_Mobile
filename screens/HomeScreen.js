import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

images = [
  require('../assets/image_1.jpg'),
  require('../assets/image_2.jpg'),
  require('../assets/image_3.jpg'),
  require('../assets/image_4.jpg'),
  require('../assets/image_5.jpg'),
]

const HomeScreen = ({ navigation }) => {
  return (
  <View style={styles.container}>
    <Text styles={styles.welcome_text}>Crescenta Valley Korean United Methodist Church</Text>
    <View style={styles.overlay_images}><SliderBox images={images} sliderBoxHeight={350} dotStyle={{ width: 0, height: 0}} autoplay circleLoop/></View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 350
  },
  welcome_text: {
    flex: 1,
    fontSize: 24,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  overlay_images: {
    position: 'absolute',
    opacity: 0.6,
  }
});

  export default HomeScreen;