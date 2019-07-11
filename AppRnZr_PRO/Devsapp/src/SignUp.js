import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin, changeEmail, changeSenha, changeNome, cadastrarUser } from './actions/AuthActions';

export class SignUp extends Component {

	static navigationOptions = {
		title:'Cadastrar',
	}

	constructor(props) {
        // console.disableYellowBox = true;
        console.ignoredYellowBox = ['Warning:']
		super(props);
        this.state = {};

    }

    componentDidUpdate() {
        if(this.props.status == 1) {
            this.props.navigation.navigate('Home');
        }
    }

	render() {
		return (
			<View style={styles.container}>
                <Text style={styles.h1}>Email: </Text>
                <TextInput style={styles.input} value={this.props.nome} onChangeText={this.props.changeNome}/>

				<Text style={styles.h1}>Email: </Text>
                <TextInput style={styles.input} value={this.props.email} onChangeText={this.props.changeEmail}/>

                <Text style={styles.h1}>Senha: </Text>
                <TextInput style={styles.input} value={this.props.password} onChangeText={this.props.changeSenha}/>

                <Button style={styles.btnCadastro} title='Cadastrar' onPress={() => this.props.cadastrarUser(this.props.nome, this.props.email, this.props.password)}/>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
        margin:10,
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    input: {
        width: 310,
        height: 40,
        backgroundColor: '#DDDDDD'
    },
    btnCadastro: {
        marginTop: 20
    }
    
});

const mapStateToProps = (state) => {
	return {
        nome: state.auth.nome,
        email: state.auth.email,
        password: state.auth.password,
        status: state.auth.status
	};
};

const SignUpConnect = connect(mapStateToProps, { checkLogin, changeEmail, changeSenha, changeNome, cadastrarUser })(SignUp);
export default SignUpConnect;
















