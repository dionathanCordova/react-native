import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet} from 'react-native';

export default class ListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: props.data.msg
        }
        // this.click = this.click.bind(this);
        this.estilo = (props.data.me == true) ? styles.blDireita : styles.blEsquerda;
    }

    render() {
        return(
            <View style={[styles.balao, this.estilo]}>
                <Text style={styles.nome}>{this.props.data.nome}</Text>
                <Text>{this.props.data.msg}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    balao:{
        backgroundColor: '#FF0000',
        margin: 10,
        padding:10,
        borderRadius: 10
    },
    blEsquerda: {
        backgroundColor: '#FFFFFF',
        alignSelf:'flex-start',
        marginRight: 50
    },
    blDireita:{
        backgroundColor: '#FFF000',
        alignSelf: 'flex-end',
        marginLeft: 50
    },
    nome:{
        fontSize: 15,
        fontWeight: 'bold'
    }
})