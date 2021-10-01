import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import styles from './style';

import Slides from '../../component/storeCollectionItem/slides';

const schedual = [
  {day: 'Monday', time: '8:00-18:00'},
  {day: 'Tuesday', time: '8:00-18:00'},
  {day: 'Wednesday', time: '8:00-18:00'},
  {day: 'Thursday', time: '8:00-18:00'},
  {day: 'Friday', time: '8:00-18:00'},
  {day: 'Saturday', time: '8:00-18:00'},
  {day: 'Sunday', time: '8:00-18:00'},
];
const Item = ({day, time}) => (
  <View
    style={{
      justifyContent: 'space-between',
      flexDirection: 'row',

    }}>
    <Text style={{color: 'black', fontWeight: 'bold'}}>{day}</Text>
    <Text style={{color: '#9D9D9D', fontWeight: 'bold'}}> {time}</Text>
  </View>
);


export default function SelectedStoreScreen({navigation}) {
  const renderItem = ({item}) => (
    <View style={{width:'100%'}}>
      <Item title={item.day} />
      <Item title={item.time} />
    </View>
  );
  return (
    <View style={{flex:1}}>
      <Image
        source={Slides[0].image}
        style={{
          height: 240,
          width: 380,
          resizeMode: 'cover',
        }}/>
      <View style={{height:'100%'}}>
      <View
    style={{
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop:20,
     
    }}> 
    <Text style={{color: 'black', fontSize:18,left:20, fontWeight: 'bold'}}>Monday</Text>
    <Text style={{color: '#9D9D9D', fontSize:18,right:20,fontWeight: 'bold'}}>8:00-18:00</Text>
    </View>

    <View
    style={{
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop:12,
     
    }}> 
    <Text style={{color: 'black', fontSize:18,left:20, fontWeight: 'bold'}}>Tuesday</Text>
    <Text style={{color: '#9D9D9D',fontSize:18,right:20, fontWeight: 'bold'}}>8:00-18:00</Text>
    </View>

    <View
    style={{
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop:12,
    }}> 
    <Text style={{color: 'black', fontSize:18,left:20,fontWeight: 'bold'}}>Wednesday</Text>
    <Text style={{color: '#9D9D9D', fontSize:18,right:20,fontWeight: 'bold'}}>8:00-18:00</Text>
    </View>

    <View
    style={{
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop:12,
    }}> 
    <Text style={{color: 'black', fontSize:18,left:20,fontWeight: 'bold'}}>Thursday</Text>
    <Text style={{color: '#9D9D9D', fontSize:18,right:20,fontWeight: 'bold'}}>8:00-18:00</Text>
    </View>

    <View
    style={{
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop:12,
    }}> 
    <Text style={{color: 'black', fontSize:18,left:20,fontWeight: 'bold'}}>Friday</Text>
    <Text style={{color: '#9D9D9D', fontSize:18,right:20,fontWeight: 'bold'}}>8:00-18:00</Text>
    </View>

    <View
    style={{
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop:12,
    }}> 
    <Text style={{color: 'black', fontSize:18,left:20,fontWeight: 'bold'}}>Saturday</Text>
    <Text style={{color: '#9D9D9D', fontSize:18,right:20,fontWeight: 'bold'}}>8:00-18:00</Text>
    </View>

    <View
    style={{
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop:12,
    }}> 
    <Text style={{color: 'black', fontSize:18,left:20,fontWeight: 'bold'}}>Sunday</Text>
    <Text style={{color: '#9D9D9D', fontSize:18,right:20,fontWeight: 'bold'}}>8:00-18:00</Text>
    </View>

        <FlatList
          data={schedual}
          horizontal
          renderItem={renderItem}
          keyExtractor={item => item.day} />
      </View>
    </View>
  );
}
