import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image} from 'react-native';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			filmes: [],
			loading: true
		}

		fetch('https://filmespy.herokuapp.com/api/v1/filmes').then((r) => r.json()).then((json) => {
			let state = this.state;
			state.filmes = json.filmes;
			state.loading = false;
			this.setState(state);
		})
	}

	render() {
		if(this.state.loading) {
			return (
				<View style={[styles.container, styles.loading]}>
					<Text style={styles.loadingTxt}>Carregando ...</Text>
				</View>
			);
		}else{
			return (
				<View style={styles.container}>
					<FlatList 
						data={this.state.filmes} 
						renderItem={({item}) => <Filmes data={item}/>} 
						keyExtractor={(item, index) => item.titulo}
					/>
				</View>
			);
		}
		
	}
}

class Filmes extends Component {
	render( ){
		return(
			<View style={styles.filmeArea}>
				<Image source={{uri: this.props.data.poster.replace('http:', 'https:')}} style={styles.filmeImage} />
				<View style={styles.filmeInfo}>
					<Text style={styles.filmeNome}>{this.props.data.titulo}</Text>
					<Text>{this.props.data.data}</Text>
					<Text>{this.props.data.genero}</Text>
					<Text style={styles.filmeSino}>{this.props.data.sinopse}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,	
		backgroundColor: '#CCCCCC',
	},
	loading: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	loadingTxt: {
		fontSize: 25,
		fontWeight: 'bold'
	},
	filmeArea: {
		flex:1,
		flexDirection: 'row',
		margin: 10,
		backgroundColor: '#FFF',
		borderRadius: 5
	},
	filmeImage: {
		margin: 10,
		width: 80,
		height: 110
	},
	filmeInfo: {
		flex: 1,
		flexDirection: 'column',
		margin: 10,
		justifyContent: 'center'
	},
	filmeNome: {
		fontSize: 20,
		fontWeight: 'bold'
	},
	filmeSino: {
		fontSize: 16,
		fontWeight: 'bold'
	}
});
