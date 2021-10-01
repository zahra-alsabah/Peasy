import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function StoreItem({item}) {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <TouchableOpacity
      onPress={() => navigation.navigate(item.path)}
       style={{width: '100%',
          height: '100%',
          
          borderTopLeftRadius: 11,
          borderTopRightRadius: 11,
          borderBottomLeftRadius: 11,
          borderBottomRightRadius: 11,}}>
        
        <Image
          source={item.image}
          style={{
            width: 320,
            height: 200,
            justifyContent: 'flex-end',
            marginLeft: 15,
            marginTop: 20,
            resizeMode: 'stretch',
          
        
          
        }}></Image>
      
  <View style={{justifyContent:'space-around',
          flexDirection:'row',}}>
        <Text
          style={{
            marginBottom: 20,
            left:0,
            color:'#9D9D9D',
            fontSize: 20,
          }}>
          {item.title}
        </Text>

        <View style={{
          flexDirection:'row',}}>
          <Image   style={{marginRight:2}}     source={require('../../assets/icons/hnee.png')} />
        <Text
          style={{
            color:'#9D9D9D',
            marginBottom: 10,
            
           
            fontSize: 14,
          }}>
          {item.location}
        </Text>
        </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
