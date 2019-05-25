import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {createStackNavigator, createAppContainer, } from 'react-navigation';

import Lei from './Lei';
import Diaria from './Diaria';
import Ufm from './Ufm'

const Navegador = createStackNavigator({
    Lei: {screen: Lei},
    Diaria: {screen: Diaria},
    Ufm: {screen: Ufm}
})

export default createAppContainer(Navegador);