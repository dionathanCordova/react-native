import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import firebase from 'firebase';

export default class SincOutrsNos extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email : '',
            senha: '',
            uid: '',
            addItemTxt: '',
            lista : []
        }

        this.Logar = this.Logar.bind(this);
        this.add = this.add.bind(this);


        firebase.auth().signOut();
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                let state = this.state;
                state.uid = user.uid;
                this.setState(state)
                alert('Está logado');

                firebase.database().ref('ToDo').child(user.uid).on('value', (snapshot) => {
                    let state = this.state;
                    state.lista = [];
        
                    snapshot.forEach((childItem) => {
                        state.lista.push({
                            key: childItem.key,
                            titulo: childItem.val().titulo
                        })
                    })
        
                    this.setState(state);
                })
            }
        });

        
    }

    Logar() {
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
        alert('Logou');
    }

    add() {
        if(this.state.uid != '' && this.state.addItemTxt != '') {
            let todo = firebase.database().ref('ToDo').child(this.state.uid);
            let chave = todo.push().key;
            todo.child(chave).set({
                titulo: this.state.addItemTxt
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Login de User</Text>

                <Text style={styles.instructions}>email:</Text>
                <TextInput onChangeText={(email) => this.setState({email})} style={styles.input}/>

                <Text style={styles.instructions}>Senha:</Text>
                <TextInput secureTextEntry={true} onChangeText={(senha) => this.setState({senha})} style={styles.input}/>

                <Button title='Lo' onPress={this.Logar}/>

                <View style={styles.addArea}>
                    <Text >Adicionar Itens</Text>
                    <TextInput value={this.state.addItemTxt} onChangeText={(addItemTxt) => this.setState({addItemTxt})} style={styles.input}/>
                    <Button title='Add' onPress={this.add}/>
                </View>

                <FlatList 
                    style={styles.lista}
                    data={this.state.lista}
                    renderItem={({item}) => {
                        return (
                            <Text style={{margin:10, color: '#FFFFFF'}}>tESTE{item.titulo}</Text>
                        )
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    margin: 20,
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
  },
  addArea: {
      borderWidth: 1,
      borderColor: '#000000',
      padding: 5
  },
  lista: {
      width: 300,
      backgroundColor: '#CCCCCC'
  }
});
