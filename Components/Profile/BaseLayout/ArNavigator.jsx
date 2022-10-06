import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ArHome from '../../../Views/ArHome';
import TrackingBookSelection from '../../../Views/TrackingBookSelection';
import PortalSelection from '../../../Views/PortalSelection';

const Stack = createNativeStackNavigator();

const ArNavigator = () => {
  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator initialRouteName="ArHome">
            <Stack.Screen name = "ArHome" component={ArHome}  options={{title:'',headerShadowVisible: false,}} /> 
            <Stack.Screen name = "Tracking" component={TrackingBookSelection}  options={{title:'',headerShadowVisible: false,}} />  
            <Stack.Screen name = "Portal" component={PortalSelection}  options={{title:'',headerShadowVisible: false,}} /> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ArNavigator