import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class Horarios extends Component {

	static navigationOptions = {
		tabBarLabel: 'Horarios',
		// tabBarIcon: ({focuset, tintColor}) => {
		// 	if(focuset) {
		// 		return (
		// 			<Image
		// 			  source={ require('./assets/images/horario_azul.png') }
		// 			  style={styles.image} />
		// 		  );
		// 	}else{
		// 		return (
		// 			<Image source={require('../assets/images/Horario_preto.png')} style={styles.image} />
		// 		);
		// 	}
			
		// }
	}

	render() {
		return (
		<View style={styles.container}>
			<Text style={styles.welcome}>Welcome to React Native!</Text>
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
	image:{
        width: 26,
        height: 26
	}
});
