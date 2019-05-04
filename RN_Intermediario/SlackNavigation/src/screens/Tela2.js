import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Tela2 extends Component {

    // HEADER DA PAGINA
    static navigationOptions = {
        title: 'Tela 2'
    }

    render() {
        return(
            <View>
                <Text>Nome: {this.props.navigation.getParam('nome')}</Text>
                <Button title='Voltar' onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}