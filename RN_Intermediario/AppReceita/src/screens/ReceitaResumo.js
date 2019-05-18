import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Resumo extends Component{

    static navigationOptions = {
        tabBarLabel: 'Resumo',
    }

    render() {
        return (
            <View style={styles.areaTab}>
                <View style={{margin:15}}>
                    <Text style={styles.nome}>{this.props.screenProps.nome}</Text>
                    <Text style={styles.por}>{this.props.screenProps.por}</Text>
                    <Text style={styles.descricao}>{this.props.screenProps.descricao}</Text>
                </View>               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    areaTab: {
        flex: 1,
        margin: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
    },
    nome: {
        fontSize: 26,
        marginBottom: 10
    },
    por: {
        marginBottom: 10,
        color: 'red',
    },
    descricao: {
        fontSize: 32,
    }
})