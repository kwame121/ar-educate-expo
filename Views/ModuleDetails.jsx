import React from 'react'
import { StyleSheet,Animated, Text,ScrollView, View,FlatList ,Alert, TouchableOpacity, ImageBackground} from 'react-native';
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
        backgroundColor:'white',
        flex:1
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
 const imageBounce = React.useRef(new Animated.Value(0)).current;
 const contentBounce = React.useRef(new Animated.Value(0)).current;


 React.useEffect(()=>{
    let lesson = getLesson(id);
    console.log(lesson);
    setLesson(lesson);
 },[]);

 React.useEffect(()=>{

    if (tabValue == 0)
    {
        Animated.timing(
            imageBounce,{
                toValue:0,
                useNativeDriver:true,
                duration:500
            }
        ).start();

        Animated.timing(
            contentBounce,{
                toValue:0,
                useNativeDriver:true,
                duration:500
            }
        ).start();
    }
    if (tabValue !==0)
    {
        Animated.timing(
            imageBounce,{
                toValue:-500,
                useNativeDriver:true,
                duration:500
            }
        ).start();

        Animated.timing(
            contentBounce,{
                toValue:-320,
                useNativeDriver:true,
                duration:500
            }
        ).start();
    }

 },[tabValue])


  return (
    <View style={stylesheet.container}>
      
        <Animated.View style={{padding:25,paddingTop:0,transform:[{translateY:imageBounce}]}}>
            <ImageBackground source={lesson?.imgUrl} borderRadius={10} style={{height:300,width:'100%'}}/>
        </Animated.View>
       
        <Animated.View style={{padding:25,marginBottom:30,paddingTop:20,display:'flex',flexDirection:'column',transform:[{translateY:contentBounce}]}}>
            <Title size={25} text={returnDefault(lesson?.title)}/>
            <View style={{marginTop:20}}>
                <NavPill selected={tabValue} onclick={setTabValue}/>
            </View>
        <View stye={{flex:1,paddingBottom:100}}>
        {
                tabValue == 0 &&
                <TextView textArray={lesson?.text}/>
            }
            {
                tabValue == 1 &&
                <ImageView images={lesson?.images}/>
            }
            {
                tabValue == 2 && 
                <VideoView/>
            }

        </View>
          
        </Animated.View>
      
       
    </View>
  )
}

export default ModuleDetails