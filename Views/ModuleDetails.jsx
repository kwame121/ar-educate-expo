import React from 'react'
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity, ImageBackground} from 'react-native';
import { getLesson,returnDefault } from '../Utils/functions';
import Title from '../Components/Profile/Reusable/Title';
import { Tab } from "@rneui/themed";
import NavPill from '../Components/Profile/Modules/NavPill';
import ImageView from '../Components/Profile/Modules/ImageView';
import VideoView from '../Components/Profile/Modules/VideoView';
import TextView from '../Components/Profile/Modules/TextView';


const stylesheet = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        height:'100%',
        backgroundColor:'white'
    },
    tabWrapperStyle:
    {
        width:'100%',
        display:'flex',
        flexDirection:'row'
    },
    tabTitleStyle: {
        color:'black',
        backgroundColor:'white'
    },
    tabContainerStyle:{
        backgroundColor:'white'
    }
});

const ModuleDetails = ({route,navigation}) => {
 let {id} = route.params;
 const [lesson,setLesson] = React.useState(null);
 const [tabValue,setTabValue] = React.useState(0);

 React.useEffect(()=>{
    let lesson = getLesson(id);
    setLesson(lesson);
 },[]);


  return (
    <View style={stylesheet.container}>
       
        <View style={{padding:25}}>
            <ImageBackground source={lesson?.imgUrl} borderRadius={10} style={{height:300,width:'100%'}}/>
            
        </View>
        <View style={{padding:25,paddingBottom:0,paddingTop:0}}>
            <Title size={25} text={returnDefault(lesson?.title)}/>
        </View>
        <View style={{padding:25}}>
            <NavPill selected={tabValue} onclick={setTabValue}/>
        </View>
        {
            tabValue == 0 &&
            <TextView textArray={lesson?.text}/>
        }
        {
            tabValue == 1 &&
            <ImageView/>
        }
        {
            tabValue == 2 && 
            <VideoView/>
        }
    </View>
  )
}

export default ModuleDetails