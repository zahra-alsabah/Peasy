import React from 'react';
import {useState} from 'react'
import { View, Text } from 'react-native'
import styles from './style';
import {Button, TextInput} from 'react-native-paper'

export default function resetScreen () {
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState(true);
    

    return (
        <View style={styles.container}>
         
      <View style={styles.head}>
        <Text style={styles.headerText}>Update your</Text>
        <Text style={styles.headerText}>password</Text>
        
        

      </View>

        <View style={styles.inp} >
      <TextInput
       
       style={{marginTop: 20}}
       mode="flat"
       type="password"
       label="Type password"
       secureTextEntry={secure}
       right={
         <TextInput.Icon
           name={secure ? 'eye' : 'eye-off'}
           onPress={() => setSecure(!secure) && !secureTextEntry}
         />
       }
       onChangeText={password => setPassword(password)}
     />

<TextInput
       
       style={{marginTop: 20}}
       mode="flat"
       type="password"
       label="Confirm password"
       secureTextEntry={secure}
       right={
         <TextInput.Icon
           name={secure ? 'eye' : 'eye-off'}
           onPress={() => setSecure(!secure) && !secureTextEntry}
         />
       }
       onChangeText={password => setPassword(password)}
     />

</View>
      
        <Button
          style={styles.btn}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Reset Password
        </Button>

        </View>
    )
}

