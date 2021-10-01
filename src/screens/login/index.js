import React from 'react';
import {useState} from 'react';

import {View, Text, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';
import {Button, TextInput} from 'react-native-paper';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [secure, setSecure] = useState(true);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.btnBack}>
            <Button
              style={{marginLeft: 20}}
              icon={require('../../assets/icons/back.png')}></Button>
          </View>

          <Text style={styles.headerText}>Log into</Text>
          <Text style={styles.headerText}>your account</Text>
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

          <TextInput
            style={{marginTop: 20}}
            mode="flat"
            type="password"
            label="Enter your password"
            secureTextEntry={secure}
            right={
              <TextInput.Icon
                name={secure ? 'eye' : 'eye-off'}
                onPress={() => setSecure(!secure) && !secureTextEntry}
              />
            }
            onChangeText={password => setPassword(password)}
          />
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.label}>Remember me</Text>
            <Button onPress={() => navigation.navigate('forgetPassword')}>
              forgot password ?
            </Button>
          </View>
        </View>

        <View style={styles.btns}>
          <Button
            style={styles.btn2}
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Sign In
          </Button>

          <Button
            style={styles.btn1}
            mode="contained"
            onPress={() => console.log('Pressed')}
            icon={require('../../assets/icons/fbLogo.png')}>
            Sign Up With Facebook
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
