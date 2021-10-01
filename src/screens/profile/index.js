import * as React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Button } from 'react-native-paper';
import Info from '../../component/users/info';
import styles from './style';


export default function ProfileScreen({navigation}) {

  const list = [
    {text: 'Account Details', path: 'details'},
    {text: 'My orders'},
    {text: 'My Subscriptions'},
    {text: 'My Wishlist'},
    {text: 'Change Category'},
    {text: 'Help'},
  ];
  const Item = ({text,path}) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        width: '100%',
        height: 60,
        borderTopWidth: 0.5,
        borderColor: 'gray',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      onPress={() => navigation.navigate(path)}>

      <View style={styles.list}>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 10,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          {text}
        </Text>
      </View>
      <Image
        style={{marginRight: 20, marginTop: 10}}
        source={require('../../assets/icons/imin.png')}></Image>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => <Item text={item.text} path={item.path} />;

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View>
          <Image style={styles.pdp} source={Info.image} />
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.drawer}>
            {Info.firstName} {Info.lastName}
          </Text>
          <Text style={styles.drawer}>{Info.birthDate}</Text>
          <View style={styles.btn}>
            <Button mode="contained" onPress={() => navigation.navigate('edit')}>Edit Profile</Button>
          </View>
        </View>
      </View>

      <SafeAreaView style={styles.container}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.text}
        />
      </SafeAreaView>
      <TouchableOpacity
      
        style={{
          width: '100%',

          height: 60,
          borderTopWidth: 0.5,
          borderColor: 'gray',

          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: 'red',
            marginLeft: 5,
            marginTop: 10,
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          {' '}
          Sign Out{' '}
        </Text>
        <Image
          style={{marginRight: 20, marginTop: 10}}
          source={require('../../assets/icons/imin.png')}></Image>
      </TouchableOpacity>
    </View>
  );
}
