import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Mosaico extends Component {

    // HEADER DA PAGINA
    static navigationOptions = {
        title: 'Mosaico',
    }

    render() {
        return(
            <View>
                <Text>Mosaico</Text>
            </View>
        );
    }
}