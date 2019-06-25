import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Exercicio extends Component{

    static navigationOptions = {
        title: 'Exercício'
    }
    
    render() {
        return(
            <View>
                <Text>Exercicio</Text>
            </View>
        )
    }
}