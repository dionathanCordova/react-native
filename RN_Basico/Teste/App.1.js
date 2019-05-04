/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

export default class App extends Component {
	
	constructor(props) {
		super(props)

		this.state = {inputVal: '', texto : ''}

		this.teste = this.teste.bind(this);
	}

	teste(){
		let s = this.state;

		if(s.inputVal == 'Dionathan') {
			s.texto = 'Olá ' + s.inputVal;
		}else{
			s.texto = 'Nome incorreto!';
		}

		this.setState(s);
		this.inputVal.clear();
		// this.setState({texto : 'Olá ' + this.state.inputVal})
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput style={styles.input} placeholder='Faça a diferença... Não imegine que vocé faz !!!' onChangeText={(texto) => {this.setState({inputVal: texto})}} ref={input => {this.inputVal = input}}/>
				<Button title='Botão' onPress={this.teste}/>
				<Text style={styles.texto}>{this.state.texto}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input:{
	textAlign: 'center',
	height: 40,
	borderWidth: 1,
	borderColor: '#000000',
	margin: 10,
	padding: 10
  },
  texto:{
	  fontSize: 20,
	  textAlign: 'center',   
  }
});
