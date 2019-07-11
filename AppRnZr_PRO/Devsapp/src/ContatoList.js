import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { teste } from './actions/ChatActions';
import {YellowBox} from 'react-native';

export class CotatoList extends Component {

	static navigationOptions = {
        title: 'Contatos',  
	}

	constructor(props) {
		super(props);
		this.state = {
			email: 'teste'
        };
        

        console.ignoredYellowBox = true;
        YellowBox.ignoreWarnings(['Warning:']);  // <- insert the warning text here you wish to hide. 
 

		this.props.teste('teste');
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Uid: {this.props.uid}</Text>
				<Text>PAGINA CONTATO... {this.props.status}</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		margin:10
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status,
		uid : state.auth.uid
	};
};

const CotatoListConnect = connect(mapStateToProps, { teste })(CotatoList);
export default CotatoListConnect;
















