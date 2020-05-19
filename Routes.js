import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import home from './src/pages/home'
import about from './src/pages/about'


const Stack = createStackNavigator()


function routes (){
    return(
        <NavigationContainer>
            <Stack.Navigator>  
            <Stack.Screen name="Home" component={home}/>  
            <Stack.Screen name="About" component={about}/>
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default routes

