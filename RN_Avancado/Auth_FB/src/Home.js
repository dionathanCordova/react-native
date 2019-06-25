import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    }

    constructor(props) {
        super(props)
        this.state = {
            nome : this.props.navigation.getParam('nome'),
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Oi - {this.state.nome}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20
    }
})