import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput} from 'react-native';
import firebase from 'firebase';

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nome : ''
        }

        this.INSERT = this.INSERT.bind(this);

    }

    INSERT() {
        if(this.state.nome.length > 0) {
            let insert = firebase.database().ref('usuarios');
            let chave = insert.push().key;
            insert.child(chave).set({nome: this.state.nome})
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Inserir Dado</Text>              
                
                <TextInput style={styles.TextInput} onChangeText={(valor) => this.setState({nome: valor})} />
                <Button title='INSERIR' onPress={this.INSERT}/>
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
    TextInput: {
        width: 300,
        borderWidth: 1,
        borderColor: '#FF0000',
        marginBottom: 5,
    },
});
