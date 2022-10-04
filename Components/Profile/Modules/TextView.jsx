import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView} from 'react-native';
import { returnDefault } from '../../../Utils/functions';


const TextView = ({textArray}) => {

  

  const stylesheet = StyleSheet.create({
    container:{
      width:'100%',
      padding:25, 
      paddingTop:0
    },
    textStyle:{
      fontSize:18,
      textAlign:'justify',
      lineHeight:28
    }

  })
  const text = returnDefault(textArray?.join("\r\n\r\n"));
  return (
    <ScrollView style={stylesheet.container}>
      <Text style={stylesheet.textStyle}>{text}</Text>
    </ScrollView>
  )
}

export default TextView