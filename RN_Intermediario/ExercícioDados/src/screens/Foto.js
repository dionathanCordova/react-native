import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Foto extends Component {

    // HEADER DA PAGINA
    static navigationOptions = {
        title: 'Foto',
    }

    render() {
        return(
            <View>
                <Text>Foto</Text>
            </View>
        );
    }
}