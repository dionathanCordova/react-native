import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import Mosaico from './Mosaico';
import Foto from './Foto';
import Perfil from './Perfil';

const AppSlack = createStackNavigator({
    Mosaico: {
        screen: Mosaico
    },
    Foto: {
        screen: Foto
    },
    Perfil: {
        screen: Perfil
    }        
})

export default AppSlack