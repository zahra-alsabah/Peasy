import React from 'react';
import styles from './style';
import {View, Text, ImageBackground, ScrollView, Image} from 'react-native';
import {Button} from 'react-native-paper';


export default function authScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/auth.png')}
        resizeMode="cover"
        style={styles.image}>
          <Image
        style={styles.img}
        source={require('../../assets/images/peasy.png')}
      />   
        <Button  style={styles.btnSign}
        onPress={() => navigation.navigate('login')}
        icon={require('../../assets/icons/arrow-right.png')}>
          Sign In
        </Button>
        <Button  style={styles.btnSkip}
        onPress={() => navigation.navigate('login')}>
          Skip
        </Button>
        <View style={styles.btns}>
          <Button
            style={styles.btn2}
            mode="contained"
            onPress={() => navigation.navigate('register')}>
            Sign Up with Email
          </Button>

          <Button
            style={styles.btn1}
            mode="contained"
            onPress={() => console.log('Pressed')}
            icon={require('../../assets/icons/fbLogo.png')}>
            Sign Up With Facebook
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
}
