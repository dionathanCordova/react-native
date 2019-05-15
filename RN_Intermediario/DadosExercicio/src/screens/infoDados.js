import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Slider, Picker, Button, AsyncStorage } from 'react-native';

export default class infoDados extends Component{

    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            diaNascimento: 0,
            mesNascimento: 0,
            anoNascimento: 0,
            sex: '',
            altura: 0,
            peso: '',
            doador: ''
        }

        AsyncStorage.getItem("nome").then((value) => {
			this.setState({nome: value});
        });
        
        AsyncStorage.getItem('diaNascimento').then((value) => {
            this.setState({diaNascimento: value});
        });

        AsyncStorage.getItem('mesNascimento').then((value) => {
            this.setState({mesNascimento: value});
        });

        AsyncStorage.getItem('anoNascimento').then((value) => {
            this.setState({anoNascimento: value});
        });

		AsyncStorage.getItem("sex").then((value) => {
			this.setState({sex: value});
		});

		AsyncStorage.getItem("altura").then((value) => {
            alert(value);
			this.setState({altura: value});
		});

		AsyncStorage.getItem("peso").then((value) => {
            alert(value);
			this.setState({peso: value});
		});

		AsyncStorage.getItem("doador").then((value) => {
			this.setState({doador: (value) ? 'Sim' : 'Não' });
		});
    }

    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.text}>Nome: {this.state.nome}</Text>
                <Text style={styles.text}>Nascimento: {this.state.diaNascimento} / {this.state.mesNascimento} / {this.state.anoNascimento}</Text>
                <Text style={styles.text}>Sexo: {this.state.sex}</Text>
                <Text style={styles.text}>Altura: {this.state.altura}</Text>
                <Text style={styles.text}>Peso: {this.state.peso}</Text>
                <Text style={styles.text}>Doador: {this.state.doador}</Text>


                <Button title="teste" onPress={() => alert(this.state.altura)} />
            </View>
        );
    }

}


const styles = StyleSheet.create({
    main:{
        flex:1,
        margin: 4
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})