import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { teste } from './actions/ChatActions';

export class ConversasList extends Component {

	static navigationOptions = {
        title: 'Chat',
	}

	constructor(props) {
		super(props);
		this.state = {
			email: 'teste'
		};

		this.props.teste('teste');
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Uid: {this.props.uid}</Text>
				<Text>Status... {this.props.status}</Text>
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

const ConversasListConnect = connect(mapStateToProps, { teste })(ConversasList);
export default ConversasListConnect;
















