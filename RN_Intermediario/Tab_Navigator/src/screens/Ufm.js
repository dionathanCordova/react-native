import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Ufm extends Component{

    static navigationOptions = {
        title : 'Simulador de Valores UFM',       
        tabBarLabel:'UFM'   
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.Title}> Ufm</Text>
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
    }
})