import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import firebase from 'firebase';

export default class CadastrarUser extends Component {

    constructor(props) {
        super(props)

        var firebaseConfig = {
            apiKey: "AIzaSyCU6d9V9xkupKEgzkVjuiwWe8Rt23Oulhg",
            authDomain: "primeiro-projeto-6f199.firebaseapp.com",
            databaseURL: "https://primeiro-projeto-6f199.firebaseio.com",
            projectId: "primeiro-projeto-6f199",
            storageBucket: "primeiro-projeto-6f199.appspot.com",
            messagingSenderId: "124839890193",
            appId: "1:124839890193:web:85b493c67db99525"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        this.state = {
            email : '',
            senha: ''
        }

        this.cadastrarUser = this.cadastrarUser.bind(this);

    }

    cadastrarUser() {
        firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.senha
        ).catch((error) => {
            if(error.code == 'auth/invalid-email') {
                alert('Email invalido!');
            }
            if(error.code == 'auth/weak-password') {
                alert('A senha precisa possuir o múnimo de 6 carcteres!');
            }
            if(error.code == 'auth/email-already-in-use') {
                alert('Este email já está sendo utilizado!');
            }

            alert(error.code + ' - ' + error.message);
        })
        alert('Cadastro sucedido');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Cadastro de Usuário</Text>

                <Text style={styles.instructions}>email:</Text>
                <TextInput onChangeText={(email) => this.setState({email})} style={styles.input}/>

                <Text style={styles.instructions}>Senha:</Text>
                <TextInput secureTextEntry={true} onChangeText={(senha) => this.setState({senha})} style={styles.input}/>

                <Button title='CADASTRAR USER' onPress={this.cadastrarUser}/>
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
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input:{
      width:300,
      height: 40,
      borderWidth: 1,
      borderColor: '#000000',
      margin: 10
  }
});
