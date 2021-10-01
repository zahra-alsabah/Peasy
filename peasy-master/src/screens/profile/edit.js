import React,{ useState } from 'react'
import { View, Text , TextInput, Image, ScrollView} from 'react-native'
import { Button } from 'react-native-paper';
import styles from './style';

export default function EditScreen() {
    const [Info, setInfo] = useState({
    image:require('../../assets/images/pdp.png'),
    firstName: 'jennifer',
    lastName: 'Geller',
    birthDate:'15/06/1996',
    email:'jennifergeller@gmail.com',

})
    return (
        <View>
            <ScrollView>

       <View 
        style={{
            
            flexDirection: 'column',
            
          }}
       > 
      <Image style={styles.profilePic} source={Info.image} />
      <Button style={styles.btn2} mode="contained">Change Image</Button>

      </View>     

      
        <View style={styles.detail}>
          <Text style={styles.titles}>First Name</Text>
          <TextInput
        style={styles.input}
       onChangeText={value=>setInfo({...Info,firstName:value})}
        value={Info.firstName}
      />
         
        </View>

        <View  style={styles.detail}>
          <Text style={styles.titles}>Last Name</Text>
          <TextInput
        style={styles.input}
        onChangeText={value=>setInfo({...Info,lastName:value})}
        value={Info.lastName}
      />
        </View>

        <View  style={styles.detail}>
          <Text style={styles.titles}>Date of Birth </Text>
          <TextInput
        style={styles.input}
        onChangeText={value=>setInfo({...Info,birthDate:value})}
        value={Info.birthDate}
      />
   
        </View>

        <View style={styles.detail}>
          <Text style={styles.titles}>Email Adress</Text>
          <TextInput
        style={styles.input}
        onChangeText={value=>setInfo({...Info,email:value})}
        value={Info.email}
      />
        </View>
        </ScrollView>
        </View>
    )
}
