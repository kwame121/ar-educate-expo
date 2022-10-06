import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView,Image} from 'react-native';



const SubjectCard = ({data}) => {

    const stylesheet = StyleSheet.create({
        container:{
            height:300,
            width:200,
            display:'flex',
            flexDirection:'column',
            backgroundColor:'#3282B8',
            justifyContent:'center',
            alignItems:'center',
            marginRight:10,
            borderRadius:30
        },

        textStyle:{
            color:'white',
            fontSize:18,
            fontWeight:'300'
        }
       
    })
  return (
    <View style={stylesheet.container}>
        <View>
            <Image source={data?.src} style={{width:100,height:100}}></Image>
        </View>
        <View style={{marginTop:20,backgroundColor:'#256189',padding:10,borderRadius:20}}>
            <Text style={stylesheet.textStyle}>
                {data?.title}
            </Text>
        </View>
    </View>
  )
}

export default SubjectCard