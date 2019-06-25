import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';

export default class CreatUsrDado extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            email : '',
            senha: ''
        }

        this.cadastrarUser = this.cadastrarUser.bind(this);
        this.login = this.login.bind(this);
        
        firebase.auth().signOut();
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                // INSERINDO DADOS NO DB
                // firebase.database().ref('usuarios').child(user.uid).set({
                //     nome: this.state.nome
                // })

                // PEGANDO DADOS DO USER LOGADO
                firebase.database().ref('usuarios').child(user.uid).on('value', (snapshot) => {
                    let state = this.state;
                    state.nome = snapshot.val().nome;
                    this.setState(state);
                })
            }
        })

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

    login() {
        firebase.auth().signInWithEmailAndPassword(
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
    }   

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.h1}>Cadastro de Usuário</Text>

                    <Text style={styles.instructions}>Nome: {this.state.nome}</Text>
                    {/* <TextInput onChangeText={(nome) => this.setState({nome})} style={styles.input}/> */}

                    <Text style={styles.instructions}>email:</Text>
                    <TextInput onChangeText={(email) => this.setState({email})} style={styles.input}/>

                    <Text style={styles.instructions}>Senha:</Text>
                    <TextInput secureTextEntry={true} onChangeText={(senha) => this.setState({senha})} style={styles.input}/>

                    <Button title='CADASTRAR USER' onPress={this.login}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  input:{
    width:300,
    height: 40,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 10,
    marginBottom:10
  }
});
