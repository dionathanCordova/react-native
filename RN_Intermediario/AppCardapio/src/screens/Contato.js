import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class Contato extends Component {

	static navigationOptions = {
		
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
