import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import HomeList from './HomeList';
import HomeProducts from './HomeProducts';

const Navegador = createStackNavigator({
	HomeList: {
		screen: HomeList
	},
	HomeProducts: {
		screen: HomeProducts
	}
}, {
	defaultNavigationOptions: {}
})

export default createAppContainer(Navegador);
