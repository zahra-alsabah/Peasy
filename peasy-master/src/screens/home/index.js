import React from 'react';
import {View, Text, ImageBackground, FlatList} from 'react-native';
import styles from './style';
import ClothesItem from '../../component/clothesItem';
import BrandItem from '../../component/brandItem';
import Slides1 from '../../component/clothesItem/slides';
import Slides2 from '../../component/brandItem/slides';

export default function homeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/summer.png')}
        style={{width: '100%', height: '30%', justifyContent: 'flex-end'}}
        imageStyle={{width: '100%', height: '100%', resizeMode: 'stretch'}}>
        <Text
          style={{
            marginBottom: 30,
            marginLeft: 40,
            fontSize: 20,
            color: '#9D9D9D',
            fontWeight: 'bold',
          }}>
          Summer Collection
        </Text>
        <Text
          icon={require('../../assets/icons/sahm.png')}
          style={{
            marginTop: 5,
            marginBottom: 10,
            color: '#9D9D9D',
            marginLeft: 20,
          }}>
          Discover
        </Text>
      </ImageBackground>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            fontSize: 20,
            color: '#9D9D9D',
            fontWeight: 'bold',
          }}>
          Collection
        </Text>

        <Text
          style={{
            marginTop: 10,
            marginRight: 10,
            fontSize: 15,
            color: '#9D9D9D',
          }}
          onPress={() => navigation.navigate('collections')}>
          View All
        </Text>
      </View>

      <FlatList
        data={Slides1}
        horizontal
        renderItem={({item}) => <ClothesItem item={item} />}></FlatList>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginTop: 1,
            marginLeft: 20,
            fontSize: 20,
            color: '#9D9D9D',
            fontWeight: 'bold',
          }}>
          Stores
        </Text>
        <Text
          style={{
            marginTop: 10,
            marginRight: 10,
            fontSize: 15,
            color: '#9D9D9D',
          }}
          onPress={() => navigation.navigate('stores')}>
          View All
        </Text>
      </View>
      <FlatList
        data={Slides2}
        horizontal
        renderItem={({item}) => <BrandItem item={item} />}></FlatList>
    </View>
  );
}
