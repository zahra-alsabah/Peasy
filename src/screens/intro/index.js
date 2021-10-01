import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View, Image, } from 'react-native';



import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    backgroundColor: 'white',
  },

  image: {
    flex: 1,
    justifyContent: "center"
  },

  img:{
    position: 'absolute',
    alignSelf: 'center',
    top:40,
    left:80,
  },

  
});

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}  loop={false} index='1'  >
         
        <View style={styles.slide}>
        
          <ImageBackground
        source={require('../../assets/images/man.png')}
        resizeMode="cover"
        style={styles.image}>
           <Image
        style={styles.img}
        source={require('../../assets/images/peasy.png')}
      />   
          </ImageBackground>
        </View>
        <View style={styles.slide}>
        <ImageBackground
        source={require('../../assets/images/woman.png')}
        resizeMode="cover"
        style={styles.image}>
           <Image
        style={styles.img}
        source={require('../../assets/images/peasy.png')}
      />   
          </ImageBackground>
        </View>
        <View style={styles.slide}>
        <ImageBackground
        source={require('../../assets/images/kid.png')}
        resizeMode="cover"
        style={styles.image}>
           <Image
        style={styles.img}
        source={require('../../assets/images/peasy.png')}
      />   
          </ImageBackground>
        </View>
      
      </Swiper>
    );
  }
}
