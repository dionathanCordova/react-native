import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Image } from 'react-native';

export default class Diaria extends Component{
    
    static navigationOptions = {
        title : 'Simulador de Valores Diaria',     
        tabBarLabel:'Diaria',
    }

    render() {
        return (
            <View style={styles.container}>
               
                <Text style={styles.Title}> Diaria</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'        
    },
    Title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    image: {
        width: 50,
        height: 50
    }
})
