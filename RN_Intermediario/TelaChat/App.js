import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, ImageBackground} from 'react-native';

import ListItem from './src/ListItem';
import MsgItem from './src/MsgItem';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			list: [
				{key: '1', avatar: 'https://www.b7web.com.br/avatar1.png', nome: 'Dionatham', msg: 'Você é foda, e conseguirá tudo oque que desejar.d'},
				{key: '2', avatar: 'https://www.b7web.com.br/avatar2.png', nome: 'Professor', msg: 'Dionathan, você está aprovado.'},
				{key: '3', avatar: 'https://www.b7web.com.br/avatar3.png', nome: 'Namorada', msg: 'Oi amor, vem me ver hoje?'},
			],
			chat:[
				{key: '1', nome: 'Dionathan', msg: 'oi', me: true},
				{key: '2', nome: 'Namorada', msg: 'Oi amor, que horas voce vai vir aqui?', me: false},
				{key: '3', nome: 'Namorada', msg: 'To com saudade', me: false},
				{key: '4', nome: 'Dionathan', msg: 'Daqui a pouco estou indo.', me: true},
				{key: '5', nome: 'Namorada', msg: 'Não demore então', me: false},
				{key: '6', nome: 'Dionathan', msg: 'ok', me: true},
			]
		}
	}

	render() {
		return (
		<View style={styles.container}>
			<ImageBackground source={require('./assets/images/bg.jpg')} style={styles.chat}>
				<FlatList data={this.state.chat} renderItem={({item}) => <MsgItem data={item} /> }/>
			</ImageBackground>
			{/* lista de conversas */}
			{/* <FlatList data={this.state.list} renderItem={({item}) => <ListItem data={item} />}></FlatList> */}
		</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
	backgroundColor: '#F5FCFF',
	marginTop: (Platform.OS == 'ios') ? 20: 0
	},
	chat:{
		flex:1
	}
});
