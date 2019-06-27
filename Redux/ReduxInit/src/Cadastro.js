import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { editEmail, editPass, cadastroUser } from './actions/AuthActions';

export class Cadastro extends Component {

	static navigationOptions = {
		title:"Cadastro"
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>E-mail:</Text>
				<TextInput value={this.props.email} style={styles.input} onChangeText={(txt) => this.props.editEmail(txt)} />

				<Text>Senha:</Text>
				<TextInput value={this.props.senha} secureTextEntry={true} style={styles.input} onChangeText={(txt) => this.props.editPass(txt)} />

				<Button title="Cadastrar" onPress={() => this.props.cadastroUser(this.props.email, this.props.senha)} />
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		margin:10
	},
	input:{
		height:40,
		backgroundColor:'#CCCCCC',
		padding:5,
		marginBottom:10
	}
});

const mapStateToProps = (state) => {
	return {
		email:state.auth.email,
		senha:state.auth.senha
	};
};

const CadastroConnect = connect(mapStateToProps, { editEmail, editPass, cadastroUser })(Cadastro);
export default CadastroConnect;




