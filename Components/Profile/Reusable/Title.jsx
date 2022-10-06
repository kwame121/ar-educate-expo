import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert} from 'react-native';
import { colorScheme } from '../../../Utils/constants';


const Title = ({text,size,fontWeight}) => {
    const style = StyleSheet.create({
        nameText: {
            fontSize:size?size:35,
            fontWeight:fontWeight?fontWeight:'700',
            color:colorScheme?.light2
        },
        
        headerWrapper: 
        {
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
        },
    })
    
  return (
    <View style={style.headerWrapper}>
            <View>
                {/* <Text style={{fontSize:20,color:'gray'}}>Hello,</Text> */}
                <Text style={style.nameText}>{text}</Text>
            </View>
            <View style={{order:1,marginLeft:'auto',textAlign:'right'}}>
                {/* <Avatar/> */}
            </View>
        </View>
  )
}

export default Title