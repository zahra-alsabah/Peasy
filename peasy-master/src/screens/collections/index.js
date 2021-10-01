import React from 'react';
import {View, Text, ImageBackground, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';
import CollectionItem from '../../component/collectionItem';
import BulleItem from '../../component/bullesItem';
import Slides1 from '../../component/collectionItem/slides';
import Slides2 from '../../component/bullesItem/slides';

export default function CollectionScreen({navigation}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={Slides2}
        horizontal
        renderItem={({item}) => <BulleItem item={item} />}></FlatList>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 20,
            fontSize: 16,
            color: '#9D9D9D',
            fontWeight: 'bold',
          }}>
          store
        </Text>

        <Text
          style={{
            marginTop: 10,
            marginRight: 10,
            fontSize: 15,
            color: '#9D9D9D',
          }}>
          View All
        </Text>
      </View>
      <FlatList
        data={Slides1}
        renderItem={({item}) => <CollectionItem item={item} />}></FlatList>
    </View>
  );
}
