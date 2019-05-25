import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, TextInput, Button} from 'react-native';

import Item from './src/Item';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			lista: [],
			input: ''
		}

		this.uri = 'https://b7web.com.br/todo/40494';

		this.loadLista = this.loadLista.bind(this);
		this.AddTarefa = this.AddTarefa.bind(this);
		this.loadLista();

	}

	loadLista() {
		fetch(this.uri)
		.then((r) => r.json())
		.then((json) => {
			let state = this.state;
			state.lista = json.todo;
			this.setState(state);
		})
	}

	AddTarefa() {
		let tarefa = this.state.input;

		let state = this.state;
		state.input = '';
		this.setState(state);

	
		fetch(this.uri, {
			method: 'POST',
			headers: 
			{
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(
			{
				item: tarefa 
			})

		}).then((response) => response.json()).then((responseJsonFromServer) =>
		{
			alert('Inserçao Concluída');

			this.loadLista();

		}).catch((error) =>
		{
			alert('Erro')
		});
        
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.addArea}>
					<Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Adicione uma nova tarefa!</Text>
					<TextInput value={this.state.input} style={styles.input} onChangeText={(text) => {
						let state = this.state;
						state.input= text;
						this.setState(state);
					}}/>
					<Button title='Adicionar' onPress={this.AddTarefa} style={{margin: 10}}/>
				</View>
				<FlatList 
					data={this.state.lista} 
					renderItem={({item}) => <Item style={{marginLeft: 10}} data={item} url={this.uri} LoadFunction={this.loadLista} /> } 
					keyExtractor={(item, index) => item.id}
				/>
			</View>
		);		
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,	
		backgroundColor: '#FFF',
	},
	addArea:{
		marginBottom: 20,
		backgroundColor: '#DDDDDD',
	},
	addTxt: {
		fontSize: 14,
		textAlign:'center',
		marginBottom: 10,
		marginTop: 10
	},
	input:{
		height: 40,
		backgroundColor: '#CCCCCC',
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 20,
		paddingLeft: 10,
		paddingRight: 10,
	}
});
