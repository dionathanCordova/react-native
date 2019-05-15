
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottonTabNavigator, createAppContainer } from 'react-navigation';

import Home from './src/Home';
import Contato from './src/Contato';
import Horarios from './src/Horarios';
import Sobre from './src/Sobre';

const Navigator = createBottonTabNavigator({
	Home: {
		screen: Home
	},
	Contato: {
		screen: Contato
	},
	Horarios:{
		screen: Horario
	},
	Sobre: {
		screen: Sobre
	}
},{
	tabBarPosition: 'bottom',
	tabBarOptions: {
		showIcon: true
	}
})

export default createAppContainer(Navigator);



