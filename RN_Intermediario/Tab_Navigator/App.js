import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';
import Tela3 from './src/screens/Tela3';

const Navegador = createStackNavigator({
  Tela1: {
    screen:Tela1
  },
  Tela2: {
    screen:Tela2
  },
  Tela3: {
    screen:Tela3
  }
}, {
  initialRouteName: 'Tela1',
  headerLayoutPreset: 'center'
});
export default createAppContainer(Navegador);















