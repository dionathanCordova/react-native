import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Simulador from './src/Simulador';
import Lei from './src/Lei';
import Diaria from './src/Diaria';
import Ufm from './src/Ufm'

const Navegador = createStackNavigator({
    Simulador: {screen: Simulador},
    Lei: {screen: Lei},
    Diaria: {screen: Diaria},
    Ufm: {screen: Ufm}
})

export default createAppContainer(Navegador);