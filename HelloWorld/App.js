import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';

class Janta extends Component{

	constructor(props) {
		super(props)

		this.state = {comida: props.comidaInicial}

		let comidas = ['Macarrão', 'Lazanha', 'Nhoque'];

		setInterval(() => {
			this.setState(previousState => {
				let n = Math.floor(Math.random() * comidas.length);

				return {comida: comidas[n]};
			});
		}, 2000);
	}

	render() {
		return (
			<View>
				<Text>{this.state.comida}</Text>
				
			</View>
		)
	}
}

export default class Primeiro extends Component{

	constructor(props) {
		super(props)

		this.state = {nome: 'teste'}

		this.mudar = this.mudar.bind(this);
	}

	mudar(t) {
		let ret = this.state;
		if(t.length > 0) {
			ret.nome = 'Olá ' + t;
		}else{
			ret.nome  = '';
		}
		this.setState(ret);
	}

	render() {
		let nome = 'Dionathan';

		let somar = (n1, n2) => {
			return n1 + n2;
		}

		return (
			<View style={{flex:1}}>
				{/* <Text style={{flex:1, backgroundColor:'blue'}}>Hello {nome} </Text> */}
				{/* <Text style={Estilo.azgrande}>Quero comer ... </Text> */}
				{/* <Janta comidaInicial='Tina'></Janta> */}
				<TextInput style={Estilo.input} placeholder='Qual o seu nome?' onChangeText={this.mudar}/>
				<Text style={Estilo.azgrande}>{this.state.nome}</Text>
			</View>
		);
	}
} 

const Estilo = StyleSheet.create({
	azgrande:{
		flex:2,
		color:'#0000FF',
		fontSize:30,
		textAlign:'center'
	},
	btn:{
		width: 20,
		backgroundColor: '#000003'
	},
	input:{
		height:40,
		borderWidth:1,
		borderColor:'#000000',
		margin:10,
		padding:10
	}, 
	nome:{

	}
})
