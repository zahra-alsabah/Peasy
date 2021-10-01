import React, {Component} from 'react';
import {ImageBackground, StyleSheet, Text, View, Image,TextInput } from 'react-native';



import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
    detail: {
        borderTopWidth: 0.5,
        borderColor: 'gray',
        marginTop: 15,
      },
      slide: {
        flex: 1,
        backgroundColor: 'white',
      },
      titles: {
        color: '#9D9D9D',
        fontSize: 15,
        marginTop: 10,
        fontWeight: 'bold',
      },
      
});

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false}  loop={false} index='1'  >
         
        <View style={styles.slide}>
        
          
           <Image
        
        source={require('../../assets/images/cash.png')}
      />   
            <Text>Cash Payment on Delivery</Text>
            <View style={styles.detail}>
          <Text style={styles.titles}>First Name</Text>
          <TextInput
        style={styles.input}
      
        
      />
         
        </View>

        <View  style={styles.detail}>
          <Text style={styles.titles}>Last Name</Text>
          <TextInput
        style={styles.input}
        
      />
        </View>

        <View  style={styles.detail}>
          <Text style={styles.titles}>Adress </Text>
          <TextInput
        style={styles.input}
      
      />
   
        </View>

        <View style={styles.detail}>
          <Text style={styles.titles}>Cin</Text>
          <TextInput
        style={styles.input}
       
      />
        </View>


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
