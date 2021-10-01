import React from 'react';
import {View, Text, ImageBackground, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';
import { Searchbar } from 'react-native-paper'
import StoreCollection from '../../component/storeCollectionItem';

import Slides from '../../component/storeCollectionItem/slides';


export default function storeCollectionScreen({navigation}) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <View style={{marginLeft:20}}>
     <Text style={{fontSize:25 ,fontWeight:'bold', color:'#9D9D9D'}}>Find all Stores </Text>
     <Text style={{fontSize:25 , fontWeight:'bold',marginTop:1 ,color:'#9D9D9D'}}>in partnership here </Text>
     </View>
      <View
        style={{
         
        }}>
         <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{width:300,height:45,marginLeft:30 , marginTop:40, marginBottom:40,backgroundColor:'#E7E6E6',  borderTopLeftRadius: 11,
      borderTopRightRadius: 11,
      borderBottomLeftRadius: 11,
      borderBottomRightRadius: 11,}}
    />
      </View>
      <FlatList
        data={Slides}
        renderItem={({item}) => <StoreCollection item={item} />}></FlatList>
    </View>
  );
}
