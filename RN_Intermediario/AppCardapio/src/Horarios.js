
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class Horarios extends Component{

    static navigatorOptions = {
        tabBarLabel: 'Horarios',
        tabBarIcon: ({focuset, tintColor}) => {
            if(focuset) {
                return (
                    <Image source={require('../assets/images/horario_azul.png')} style={styles.icone} />
                )
            }else{
                return (
                    <Image source={require('../assets/images/horario_preto.png')} style={styles.icone} />
                )
            }
        }
    }

	render() {
		return (
		<View style={styles.container}>
			<Text style={styles.welcome}>Welcome to React Native!</Text>
			<Text style={styles.instructions}>To get started, edit App.js</Text>
			<Text style={styles.instructions}>{instructions}</Text>
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
    icone:{
        width: 26,
        height: 26
    }
});