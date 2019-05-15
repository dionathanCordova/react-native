import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Feed extends Component {

    // HEADER DA PAGINA
    static navigationOptions = {
        title: 'Feed',
    }

    render() {
        return(
            <View>
                <Text>Feed</Text>

                <Button title='IR PARA PERFIL' onPress={() => this.props.navigation.navigate('Perfil', {nome: 'PERFIL'})} />
            </View>
        );
    }
}