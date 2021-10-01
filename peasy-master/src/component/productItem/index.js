import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';

export default function Product({item}) {
  const [like, setlike] = useState(false)
  return (
    <View>
      <ScrollView>
        <Image
          source={item.image}
          style={{
            width: 170,
            height: 220,
            justifyContent: 'flex-end',
            marginLeft: 15,
            marginTop: 10,
          }}
          imageStyle={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            borderTopLeftRadius: 7,
            borderTopRightRadius: 7,
            borderBottomLeftRadius: 7,
            borderBottomRightRadius: 7,
          }}></Image>
        <Text
          style={{
            marginBottom: 20,
            marginLeft: 20,
            color: 'black',
            fontSize: 10,
          }}>
          {item.text}
        </Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              marginBottom: 20,
              marginLeft: 20,
              color: 'black',
              fontSize: 10,
            }}>
            {item.prix}
          </Text>
          <Button
            onPress={() => setlike(!like)}
            icon={!like ? require('../../assets/icons/heart.png') : 'heart'}></Button>
        </View>
      </ScrollView>
    </View>
  );
}
