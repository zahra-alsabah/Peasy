import React from 'react';
import {useState} from 'react'
import { View, Text } from 'react-native'
import styles from './style';
import {Button, TextInput} from 'react-native-paper'

export default function forgetScreen ({navigation}) {
    const [email, setEmail] = useState('');

    return (
        <View style={styles.container}>
         
      <View style={styles.head}>
        <Text style={styles.headerText}>Forget Password ?</Text>
        
        <View style={{marginTop:10}} >
            
            <Text style={styles.smallText} > please enter your Email adress </Text>
        <Text style={styles.smallText} > to change your new password </Text>
        </View>

      </View>

              <View style={styles.inp}>
        <TextInput
          mode="flat"
          type="email"
          underlinecolor="#000"
          label="Enter email"
          value={email}
          onChangeText={email => setEmail(email)}
        />
         </View>

      
        <Button
          style={styles.btn}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Send
        </Button>
      
        <Button
          
          onPress={() => navigation.navigate('resetPassword')}
          
          >
          Reset your password
        </Button>
        </View>
    )
}
