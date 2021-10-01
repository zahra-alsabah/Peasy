import React from 'react'
import { View, Text, ImageBackground } from 'react-native'


export default function brandComponent({item}) {
    return (
        <ImageBackground
        source={item.image}
        style={{width: 120, height: 120,justifyContent:"flex-end", marginLeft:15, marginTop:10, }}
        imageStyle={{width: '100%', height: '100%',borderWidth:1, borderColor:'#808080',resizeMode:"cover", borderTopLeftRadius: 11, borderTopRightRadius:11,borderBottomLeftRadius:11,borderBottomRightRadius:11}}>
            
                
        
            
      </ImageBackground>

    )
}
