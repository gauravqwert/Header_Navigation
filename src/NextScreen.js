import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const NextScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text style={{fontWeight:'bold',fontSize:20}}>
          Hello everyone ! How are you ?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text style={{fontWeight:'bold', fontSize:18, color:'red'}}>
        Move to the Home Screen
      </Text>
      </TouchableOpacity>
    </View>
  )
}

export default NextScreen