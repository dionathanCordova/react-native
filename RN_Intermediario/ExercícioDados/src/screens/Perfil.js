import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Perfil extends Component{
    
    // HEADER DA PAGINA
    static navigationOptions = {
        title: 'Perfil',
    }

    render() {
        return(
            <View>
                <Text  style={styles.text}>{this.props.navigation.getParam('nome')}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text:{
        justifyContent:'center',
        fontSize: 30,
        marginTop: 200,
        alignItems: 'center'
    }
})