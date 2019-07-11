import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import ConversasList from './ConversasList';
import ContatoList from './ContatoList';
import Config from './Config';

const ConversasNavegador = createMaterialTopTabNavigator({
	ConversasList : ConversasList,
	ContatoList: ContatoList,
	Config: Config
}, {
	
	tabBarPosition: 'top',
	animationEnabled: true,
	swipeEnabled: true,
	tabBarOptions: {
		activeTintColor: '#FFFFFF',
		inactiveTintColor: '#F8F8F8',
		style: {
			backgroundColor: '#633689',
		},
		labelStyle: {
			textAlign: 'center',
		},
		indicatorStyle: {
			borderBottomColor: '#87B56A',
			borderBottomWidth: 2,
		},
	},
})

const App = createStackNavigator({
  TabScreen: {
    screen: ConversasNavegador,
    navigationOptions: {
      	headerStyle: {
			backgroundColor: '#633689',
		},
		headerTintColor: '#FFFFFF',
		title: 'TabExample',
	},
  },
});

export default createAppContainer(App);
















