import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Auth = createNativeStackNavigator();

import Login from '../pages/Login';

const AuthRoutes = () =>{
    return (
        <Auth.Navigator screenOptions={{headerShown:false}}>
            <Auth.Screen name="Login screen" component={Login}/>
        </Auth.Navigator>
    )
}

export default AuthRoutes;