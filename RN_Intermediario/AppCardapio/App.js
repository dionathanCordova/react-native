import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Home from "./src/screens/Home";
import Contato from "./src/screens/Contato";
import Horarios from "./src/screens/Horarios";
import Sobre from "./src/screens/Sobre";

const Navegador = createBottomTabNavigator({
	Home: {
		screen: Home,
		navigationOptions: {
			title: "Restaurante XYZ",
			tabBarLabel: "Home",
			tabBarIcon: ({ focused, tintColor }) => {
				if (focused) {
					return (
						<Image
						source={require("./assets/images/home_azul.png")}
						style={styles.icone}
						/>
					);
				} else {
					return (
						<Image
						source={require("./assets/images/home_preto.png")}
						style={styles.icone}
						/>
					);
				}
			}
		}
	},
	Contato: {
		screen: Contato,
		navigationOptions: {
			title: "Restaurante XYZ",
			tabBarLabel: "Home",
			tabBarIcon: ({ focused, tintColor }) => {
				if (focused) {
					return (
						<Image
						source={require("./assets/images/contato_azul.png")}
						style={styles.icone}
						/>
					);
				} else {
					return (
						<Image
						source={require("./assets/images/contato_preto.png")}
						style={styles.icone}
						/>
					);
				}
			}
		}
	},
	Horarios: {
		screen: Horarios,
		navigationOptions: {
			title: 'Horarios de funcionamento',
			tabBarLabel: 'Horarios',
			tabBarIcon: ({focused, tintColor}) => {
				if(focused) {
					return (
						<Image source={require('./assets/images/horario_azul.png')} style={styles.icone} />
					)
				}else{
					return (
						<Image source={require('./assets/images/horario_preto.png')} style={styles.icone} />
					)
				}
			}
		}
	},
	Sobre: {
		screen: Sobre,
		navigationOptions: {
			title: 'Sobre Nós',
			tabBarLabel: 'Sobre',
			tabBarIcon: ({ focused, tintColor}) => {
				if(focused) {
					return (
						<Image  source={require('./assets/images/sobre_azul.png')} style={styles.icone} />
					)
				}else{
					return (
						<Image  source={require('./assets/images/sobre_preto.png')} style={styles.icone} />
					)
				}
			}
		}
	}
	}, {
		tabBarOptions: {
		showIcon: true
		}
});
const container = createAppContainer(Navegador);

export default container;

const styles = StyleSheet.create({
	icone:{
		width:26,
		height:26
	}
});
