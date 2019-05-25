import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/screens/Home';
import Tela3 from './src/screens/Tela3';

const Navegador = createStackNavigator({
	Home: {
		screen:Home
	},
	Tela3: {
		screen:Tela3
	}
	// }, 
	// {
		// initialRouteName: 'Home',
		// headerLayoutPreset: 'center'
});
export default createAppContainer(Navegador);















