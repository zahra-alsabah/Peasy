import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function item3({item}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(item.path)}>
      <ImageBackground
        source={item.image}
        style={{
          width: 330,
          height: 170,
          justifyContent: 'flex-end',
          marginLeft: 15,
          marginTop: 20,
          
        }}
        imageStyle={{
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          borderTopLeftRadius: 11,
          borderTopRightRadius: 11,
          borderBottomLeftRadius: 11,
          borderBottomRightRadius: 11,
        }}>
        <Text
          style={{
            marginBottom: 20,
            marginLeft: 20,
            color: 'white',
            fontSize: 20,
          }}>
          {item.text}{' '}
        </Text>
        <Text
          style={{
            marginBottom: 30,
            marginLeft: 20,
            color: 'white',
            fontSize: 14,
          }}>
          {item.brand}{' '}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
