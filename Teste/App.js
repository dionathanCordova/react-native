/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, TextInput, Image} from 'react-native';

export default class App extends Component {
	
	constructor(props) {
		super(props)

		this.state = {text1: '', texto2: ''};

		this.normal = this.normal.bind(this)
	}

	mudatexto(texto) {
		let novotexto = texto.toLowerCase();

		novotexto = novotexto.replace(/(a|e|i|o|u)/g, 'i');
		return novotexto.toUpperCase();
	}

	normal(r) {
		let s = this.state;
		s.texto1 = r.toUpperCase();
		s.texto2 = this.mudatexto(r);

		this.setState(s);
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					<Text style={styles.titulo}>Criador de MIMIMI</Text>
				</View>
				
				<View style={styles.inputArea}>
					<TextInput placeholder='Digite seu mimimi' style={styles.input} onChangeText={this.normal}/>
				</View>

				<View style={styles.area}>
					<Text style={[styles.texto, styles.texto1]}> {this.state.texto1}</Text>
					<Image style={styles.guri} source={require('./images/mimimi.jpg')}/>
					<Text style={[styles.texto, styles.texto2]}> {this.state.texto2}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	// justifyContent: 'center',
	// padding: 30,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputArea:{
	alignSelf: 'stretch',
  },
  input:{
	textAlign: 'center',
	height: 40,
	// width: 100,
	borderWidth: 1,
	borderColor: '#000000',
	margin: 10,
	padding: 10
  },
  titulo:{
	  fontSize: 20,
	  textAlign: 'center',   
  },
  area:{
	width: 300,
	height: 300,
	marginTop: 10,

  },
  guri:{
	width: 300,
	height: 300,
	marginTop: -70,
	zIndex: 0
  },
  texto:{
	fontSize: 25,
	color: '#FFFFFF',
	padding:10,
	backgroundColor: 'transparent',
	fontWeight: 'bold',
	textAlign: 'center',
	height: 60,
  },
  texto1: {
	  zIndex: 1,
	  color: '#ffff00',
  },
  texto2:{
	  color: '#ffff00',
	  zIndex: 1,
	  marginTop: -70
  }
});
