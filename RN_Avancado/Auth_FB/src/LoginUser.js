import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import firebase from './conexaoFB/connect';

export default class LoginUser extends Component {

    static navigationOptions = {
        title : 'Login'
    }

    constructor(props) {
        super(props)

        this.state = {
            email : '',
            senha: ''
        }

        this.Logar = this.Logar.bind(this);

        firebase.auth().signOut();        
    }

    Logar() {
        
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                firebase.database().ref('usuarios').child(user.uid).once('value').then((snapshot) => {
                    this.props.navigation.navigate('Home', {nome: snapshot.val().nome});
                })
            }
        });
        
        firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.senha
        ).catch((error) => {
            if(error.code == 'auth/invalid-email') {
                alert('Email invalido!');
            }
            if(error.code == 'auth/wrong-password') {
                alert('A senha incorreta');
            }

            alert(error.code + ' - ' + error.message);
        })
       
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Login de User</Text>

                <Text style={styles.instructions}>email:</Text>
                <TextInput onChangeText={(email) => this.setState({email})} style={styles.input}/>

                <Text style={styles.instructions}>Senha:</Text>
                <TextInput secureTextEntry={true} onChangeText={(senha) => this.setState({senha})} style={styles.input}/>

                <Button title='LOGAR' onPress={this.Logar}/>
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
