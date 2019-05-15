import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';

import Feed from './Feed';
import Perfil from './Perfil';

const AppSlack = createStackNavigator({
    Feed: {
        screen: Feed
    },
    Perfil: {
        screen: Perfil
    }        
})

export default AppSlack