import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { connect } from 'react-redux';
import { teste } from './actions/ChatActions';
import { SignOut } from './actions/AuthActions';

export class Config extends Component {

	static navigationOptions = {
        title: 'Congif',
	}

	constructor(props) {
		super(props);
		this.state = {
			email: 'teste'
		};

		this.props.teste('teste');
		this.sair= this.sair.bind(this);
	}

	sair(){
		this.props.SignOut();
		const resetAction = StackActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: 'Home' })],
		});
		this.props.navigation.dispatch(resetAction);
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Uid: {this.props.uid}</Text>
				<Text>PAGINA CONFIG... {this.props.status}</Text>

				<Button title='Sair' onPress={this.sair}/>
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

const ConfigConnect = connect(mapStateToProps, { teste, SignOut })(Config);
export default ConfigConnect;
















