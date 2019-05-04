/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class Botao extends Component{

	constructor(props) {
		super(props);
		this.state = {};

		let fl = 1;
		if(props.fl) {
			fl = parseInt(props.fl);
		}

		let bg = '#E0E0E0';
		if(props.bg) {
			bg = props.bg;
		}

		this.styles = StyleSheet.create({
			Area:{
				flex:fl,
				justifyContent: 'center',
				alignItems: 'center',
				borderWidth: 1,
				borderColor: '#999999',
				backgroundColor: bg,
			},
			texto:{
				fontSize: 25,
				fontWeight: 'bold',
			}
		});
	}

	render() {
		return (
			<TouchableOpacity style={this.styles.Area} onPress={this.props.onPress}>
				<Text style={this.styles.texto}>{this.props.title}</Text>
			</TouchableOpacity>
		);
	}
}

export default class App extends Component {

	constructor(props) {
		super(props) 
		this.state = {resp: '0'}

		this.btnval = this.btnval.bind(this)
	}

	btnval(r) {
		let s = this.state;
		if(r == 'AC'){
			s.resp = 0;
		}else if(r == '=') {
			s.resp = eval(s.resp);
		}else{
			if(s.resp == 0) {
				s.resp = r;
			}else{
				s.resp += r;
			}
			
		}
		this.setState(s);	
	}

  	render() {
		return (
			<View style={styles.container}>
				<View style={styles.linha}>
					<Text fl='2' style={styles.res}>{this.state.resp}</Text>
				</View>
				<View style={styles.linha}>
					<Botao fl='3' title='AC' onPress={() => {this.btnval('AC')}}/>
					<Botao title='/' bg='#FD9536' onPress={() => {this.btnval('/')}}/>
				</View>
				<View style={styles.linha}>
					<Botao title='7' onPress={() => {this.btnval('7')}}/>
					<Botao title='8' onPress={() => {this.btnval('8')}}/>
					<Botao title='9' onPress={() => {this.btnval('9')}}/>
					<Botao title='*' bg='#FD9536' onPress={() => {this.btnval('*')}}/>
				</View>
				<View style={styles.linha}>
					<Botao title='4' onPress={() => {this.btnval('4')}}/>
					<Botao title='5' onPress={() => {this.btnval('5')}}/>
					<Botao title='6' onPress={() => {this.btnval('6')}}/>
					<Botao title='-' bg='#FD9536' onPress={() => {this.btnval('-')}}/>
				</View>
				<View style={styles.linha}>
					<Botao title='1' onPress={() => {this.btnval('1')}}/>
					<Botao title='2' onPress={() => {this.btnval('2')}}/>
					<Botao title='3' onPress={() => {this.btnval('3')}}/>
					<Botao title='+' bg='#FD9536' onPress={() => {this.btnval('+')}}/>
				</View>
				<View style={styles.linha}>
					<Botao fl='2' title='0' onPress={() => {this.btnval('0')}}/>
					<Botao title='.' onPress={() => {this.btnval('.')}}/>
					<Botao title='=' bg='#FD9536' onPress={() => {this.btnval('=')}}/>
				</View>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  linha:{
	  flex:1,
	  flexDirection:'row',
  },
  res:{
	backgroundColor: '#000000',
	color: '#FFFFFF',
	fontSize: 50,
	flex: 1,
	textAlign: 'right',
  }
});
