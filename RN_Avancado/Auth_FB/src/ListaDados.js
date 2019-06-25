import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, FlatList} from 'react-native';
import firebase from 'firebase';

export default class ListaDados extends Component {

    constructor(props) {
        super(props)

        this.state = {
            lista : []
        }

        firebase.database().ref('usuarios').on('value', (snapshot) => {
            let state = this.state;
            state.lista = [];

            snapshot.forEach((childItem) => {
                state.lista.push({
                    key: childItem.key,
                    nome: childItem.val().nome
                })
            })

            this.setState(state);
        })

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Lista de Dados</Text>

                <FlatList 
                    data={this.state.lista}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <Text>{item.nome}</Text>
                            </View>
                        );
                    }}
                />
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
