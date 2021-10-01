import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';

import {Button} from 'react-native-paper';
import Swiper from 'react-native-swiper';
import Slides from '../../component/productItem/slides';

export default function SelectedScreen() {
  return (
    <View style={{flex: 1}}>
      <Swiper showsButtons={false} horizontal={false} loop={false} index="1">
        {Slides[0]?.images?.map((item, index) => (
          <Image
            source={item}
            style={{height: '100%', width: '100%', resizeMode: 'stretch'}}
          />
        ))}
      </Swiper>

      <View
        style={{
          borderTopRightRadius:20,
          borderTopLeftRadius:20,
          marginLeft:20
        }}>
        <Text
          style={{
            color: '#9D9D9D',
            marginTop: 10,
            marginBottom: 10,
            fontSize: 15,
          }}>
          {Slides[0].text}
        </Text>
        <Text
          style={{
            color: '#9D9D9D',
            marginTop: 8,
            marginBottom: 10,
            fontSize: 18,
          }}>
          {Slides[0].taille}
        </Text>
        <Text
          style={{
            color: '#9D9D9D',
            marginTop: 8,
            marginBottom: 10,
            fontSize: 18,
          }}>
          {Slides[0].prix}
        </Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Button mode="contained" style={{width: 150, marginLeft: 20}}>
            Add to cart
          </Button>

          <View
            style={{
              justifyContent: 'space-between',
              alignItems:'center',
              flexDirection: 'row',
              width:'20%'
            }}>
            <Image
              
              source={require('../../assets/icons/heart.png')}
            />
            <Image
              
              source={require('../../assets/icons/share.png')}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
