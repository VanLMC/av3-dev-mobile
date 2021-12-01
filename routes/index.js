import React, {useContext} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {UsuarioContext} from '../contexts/user';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';


const Routes = () =>{
    const { user } = useContext(UsuarioContext);
    return (
        <NavigationContainer>
            {user ? <AppRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    )
}

export default Routes;