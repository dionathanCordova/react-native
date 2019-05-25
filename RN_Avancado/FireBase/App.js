import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import firebase from 'firebase';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {curso: 'carregando', nomeInp: '', idadeInp: ''};

		var firebaseConfig = {
		apiKey: "AIzaSyCU6d9V9xkupKEgzkVjuiwWe8Rt23Oulhg",
		authDomain: "primeiro-projeto-6f199.firebaseapp.com",
		databaseURL: "https://primeiro-projeto-6f199.firebaseio.com",
		projectId: "primeiro-projeto-6f199",
		storageBucket: "primeiro-projeto-6f199.appspot.com",
		messagingSenderId: "124839890193",
		appId: "1:124839890193:web:85b493c67db99525"
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);

		firebase.database().ref('usuarios/2/nome').on('value', (snapshot) => {
			let state = this.state;
			state.curso = snapshot.val();
			this.setState(state);
		});

		this.insert = this.insert.bind(this);

		firebase.database().ref('usuarios').child('-LfMvp8rjikLV6fPhSwz').remove();
		
	}

	insert() {
		if(this.state.nomeInp.length > 0) {
			// acessando a tabela
			let usuarios = firebase.database().ref('usuarios');
			// gerando uma chave unica
			let chave = usuarios.push().key;
			// selecionando a chave e adicionando os novos dados 
			usuarios.child(chave).set({
				nome: this.state.nomeInp,
				idade : this.state.idadeInp
			});

			alert('Inserte Concluido')
		}
	}

	render() {
		return (
		<View style={styles.container}>
			<Text style={styles.welcome}>Nome do User: </Text>
			<TextInput style={styles.input} onChangeText={(nomeInp) => this.setState({nomeInp})}/>

 			<Text style={styles.instructions}>Idade: </Text>
 			<TextInput style={styles.input} onChangeText={(idadeInp) => this.setState({idadeInp})}/>
			 
			<Button title='Inserir' onPress={this.insert}/>

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
	padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input:{
	  width: 200,
	  height: 40,
	  borderWidth: 1,
	  borderColor: '#FF0000'
  }
});
