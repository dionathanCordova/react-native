import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Tela1 extends Component {

    // HEADER DA PAGINA
    static navigationOptions = {
        title: 'Tela 1',
    }

    render() {
        return(
            <View>
                <Text>Tela1</Text>
                <Button title='PAGINA 2' onPress={() => this.props.navigation.navigate('Tela2', {nome: 'Dionathan'})} />
            </View>
        );
    }
}