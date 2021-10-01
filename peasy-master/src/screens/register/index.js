import React from 'react';
import {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import styles from './style';
import {Button, TextInput} from 'react-native-paper';
import {Modalize} from 'react-native-modalize';

export default function registerScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [secure, setSecure] = useState(true);
  const [date, setDate] = useState(new Date());

  const modalizeRef = useRef();

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.headerText}>Create</Text>
        <Text style={styles.headerText}>a new account</Text>
      </View>
      <ScrollView>
        <View style={styles.inp}>
          <TextInput
            style={{marginTop: 10}}
            mode="flat"
            type="name"
            underlinecolor="#000"
            label="Enter your full name"
            value={name}
            onChangeText={name => setName(name)}
          />

          <TextInput
            style={{marginTop: 10}}
            mode="flat"
            type="email"
            underlinecolor="#000"
            label="Enter your Email"
            value={email}
            onChangeText={email => setEmail(email)}
          />
          <TouchableOpacity onPress={onOpen}>
          <TextInput
            style={{marginTop: 10}}
            mode="flat"
            disabled
            type="date"
            underlinecolor="#000"
            label="Birth date"
            value={date}
           // onChangeText={date => setDate(date)}
          />
          </TouchableOpacity>

         

          <TextInput
            style={{marginTop: 10}}
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
            style={{marginTop: 10}}
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

        <View style={styles.btns}>
          <Button
            style={styles.btn2}
            mode="contained"
            onPress={() => console.log('Pressed')}>
            Sign Up
          </Button>

          <Button onPress={() => navigation.navigate('login')}>
            you have an account ?
          </Button>
        </View>
      </ScrollView>
      <Modalize ref={modalizeRef} adjustToContentHeight>
            <DatePicker date={date} onDateChange={setDate} style={{marginBottom:20,marginTop:20}} />
          </Modalize>
    </View>
  );
}
