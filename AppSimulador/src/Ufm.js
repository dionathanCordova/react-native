import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class Ufm extends Component{

    static navigationOptions = {
        title : 'Ufm'
    }

    render() {
        return (
            <View>
                <Text>Ufm</Text>
            </View>
        );
    }
}