import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import Reducers from './src/Reducers';

import Home from './src/Home';
import Cadastro from './src/Cadastro';
import Login from './src/Login';

let store = createStore(Reducers, applyMiddleware(reduxThunk));

const Navegador = createStackNavigator({
  Home:{
    screen:Home
  },
  Cadastro:{
    screen:Cadastro
  },
  Login:{
    screen:Login
  }
  
});

const Container = createAppContainer(Navegador);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}