import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';


import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `#b22222`,
  },
  peas: {
    position: 'absolute',
    alignSelf: 'center',
    top: 40,
    left: 80,
  },

  img: {
    position: 'absolute',
    top: 210,
    left: 50,
    width: 260,
    height: 210,
    resizeMode:"contain"
  },

  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    bottom: 130,
    left: 60,
    position: 'absolute',
    textAlign: 'center',
  },
  smallTxt: {
    color: 'white',
    fontSize: 17,
    bottom: 90,
    left: 90,
    position: 'absolute',
  },
});

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} loop={false} index='1' activeDotColor='white' >
        
        <View style={styles.slide}>
       
          <Image
            style={styles.peas}
            source={require('../../assets/images/peas.png')}
          />
          <Image
            style={styles.img}
            source={require('../../assets/images/onboard1.png')}
          />
          <Text style={styles.text}>Shop From Distance</Text>
          <View style={styles.smallTxt}>
            <Text style={{color: 'white', fontSize: 13}}>
              You can shop your best outfits
            </Text>
            <Text style={{color: 'white', fontSize: 13, textAlign: 'center'}}>
              {' '}
              by a simple click from distance
            </Text>
          </View>
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.peas}
            source={require('../../assets/images/peas.png')}
          />
          <Image
            style={styles.img}
            source={require('../../assets/images/onboard2.png')}
          />
          <Text style={styles.text}> Buy with Credit Card</Text>
          <View style={styles.smallTxt}>
            <Text style={{color: 'white', fontSize: 13}}>
              Wherever you are you can shop
            </Text>
            <Text style={{color: 'white', fontSize: 13, textAlign: 'center'}}>
              {' '}
              with your own credit card
            </Text>
          </View>
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.peas}
            source={require('../../assets/images/peas.png')}
          />
          <Image
            style={styles.img}
            source={require('../../assets/images/onboard3.png')}
          />
          <Text style={styles.text}>Peasy Payment</Text>
          <View style={styles.smallTxt}>
            <Text style={{color: 'white', fontSize: 13}}>
              Pay with facility with your Credit Card
            </Text>
            <Text style={{color: 'white', fontSize: 13, textAlign: 'center'}}>
              {' '}
              and with Peasy
            </Text>
          </View>
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.peas}
            source={require('../../assets/images/peas.png')}
          />
          <Image
            style={styles.img}
            source={require('../../assets/images/onboard4.png')}
          />
          <Text style={styles.text}>Home Delivery</Text>
          <View style={styles.smallTxt}>
            <Text style={{color: 'white', fontSize: 13, textAlign: 'center'}}>
              Your order is delivered wherever
            </Text>
            <Text style={{color: 'white', fontSize: 13, textAlign: 'center'}}>
              {' '}
              you are
            </Text>
          </View>
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.peas}
            source={require('../../assets/images/peas.png')}
          />
          <Image
            style={styles.img}
            source={require('../../assets/images/onboard5.png')}
          />
          <Text style={styles.text}>Store Subscription</Text>
          <View style={styles.smallTxt}>
            <Text style={{color: 'white', fontSize: 13}}>
              Subscribe for your favourite Store
            </Text>
            <Text style={{color: 'white', fontSize: 13, textAlign: 'center'}}>
              {' '}
              and follow their best collections
            </Text>
            
          </View>
        </View>
      </Swiper>
    );
  }
}
