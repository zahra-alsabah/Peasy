import React from 'react';
import {View, Text, Image} from 'react-native';
import Info from '../../component/users/info';
import styles from './style';

export default function DetailsScreen() {
  return (
    <View>

      <Image style={styles.profilePic} source={Info.image} />
<View style={{
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop:30,
}}>
  <Image source={require('../../assets/icons/orders.png')} />
  <Image source={require('../../assets/icons/loc.png')} />
  <Image source={require('../../assets/icons/liked.png')} />

</View>
      

        <View style={styles.detail}>
          <Text style={styles.titles}>First Name</Text>
          <Text style={styles.txt}> {Info.firstName}</Text>
        </View>

        <View  style={styles.detail}>
          <Text style={styles.titles}>Last Name</Text>
          <Text style={styles.txt}>{Info.lastName}</Text>
        </View>

        <View  style={styles.detail}>
          <Text style={styles.titles}>Date of Birth </Text>
          <Text style={styles.txt}>{Info.birthDate}</Text>
        </View>

        <View style={styles.detail}>
          <Text style={styles.titles}>Email Adress</Text>
          <Text style={styles.txt}>{Info.email}</Text>
        </View>

      
    </View>
  );
}
