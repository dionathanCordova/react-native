import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';

const appNavigator = createStackNavigator({
	Tela1: {screen:	Tela1},
	Tela2: {screen: Tela2}
}, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: '#FF0000',
		},
		headerTintColor: '#FFFFFF',
		headerTitleStyle:{
			fontWeight: 'bold',
			fontSize: 30,
			alignItems: 'center'
		}
	}
})

const AppContainer = createAppContainer(appNavigator);

export default AppContainer;

// export default class App extends Component{

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			statusStyle: 'dark-content',
// 			bgColor: "#FFFFFF"
// 		};

// 		AsyncStorage.getItem('nome').then((value) => {this.setState({nome: value})})
		
// 		this.getnome = this.getnome.bind(this);
// 	}
	
// 	getnome(nome) {
// 		let s = this.state;
// 		s.nome = nome;
// 		this.setState(s); 
// 		AsyncStorage.setItem('nome', nome)
// 	}

// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<Text>{Platform.OS} - versão {Platform.Version}</Text>
// 				<Tela1/>
// 				<Tela2/>
// 			</View>		
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		paddingTop:20,
// 		flex:1,
// 		backgroundColor: '#CCCCCC',
// 		justifyContent: 'center',
// 		alignItems: 'center'
// 	},  
// 	input:{
// 		height: 40,
// 		width: 200,
// 		borderWidth: 1,
// 		borderColor: '#CCCCCC',
// 		padding: 10,
// 		fontSize: 16
// 	}
// 	// modal: {
// 	// 	flex: 1,
// 	// 	backgroundColor: '#00FF00',
// 	// 	paddingTop: 40,
// 	// 	alignItems: 'center'
// 	// }

	
	
// });
