import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function bulleScreen({item}) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(item.path)}>
        <Image
          source={item.image}
          style={{width: 70, height: 70, marginLeft: 15, marginTop: 40}}
          imageStyle={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            borderTopLeftRadius: 11,
            borderTopRightRadius: 11,
            borderBottomLeftRadius: 11,
            borderBottomRightRadius: 11,
          }}></Image>
      </TouchableOpacity>
      <Text
        style={{
          marginBottom: 50,
          marginLeft: 30,
          color: '#9D9D9D',
          fontSize: 12,
        }}>
        {item.text}{' '}
      </Text>
    </View>
  );
}
