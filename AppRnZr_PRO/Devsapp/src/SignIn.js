import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin, changeEmail, changeSenha, loginUser } from './actions/AuthActions';

export class SignIn extends Component {

	static navigationOptions = {
		title:'Login',
	}

	constructor(props) {
        // console.disableYellowBox = true;
        console.ignoredYellowBox = ['Warning:']
		super(props);
        this.state = {};

    }

    componentDidUpdate() {
        if(this.props.status == 1) {
            this.props.navigation.navigate('Conversas');
            		
            AsyncStorage.setItem('token', this.props.token)
            AsyncStorage.setItem('email', this.props.email)
            AsyncStorage.setItem('uid', this.props.uid)

        }
    }

	render() {
		return (
			<View style={styles.container}>

                <Text>Status de Login: {this.props.status}</Text>

				<Text style={styles.h1}>Email: </Text>
                <TextInput style={styles.input} value={this.props.email} onChangeText={this.props.changeEmail}/>

                <Text style={styles.h1}>Senha: </Text>
                <TextInput style={styles.input} value={this.props.password} onChangeText={this.props.changeSenha}/>

                <Button style={styles.btnCadastro} title='Entrar' onPress={() => this.props.loginUser(this.props.email, this.props.password)}/>
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
        marginTop: 50
    }
    
});

const mapStateToProps = (state) => {
	return {
        uid: state.auth.uid,
        token: state.auth.token,
        email: state.auth.email,
        password: state.auth.password,
        status: state.auth.status
	};
};

const SignInConnect = connect(mapStateToProps, { checkLogin, changeEmail, changeSenha, loginUser })(SignIn);
export default SignInConnect;
















