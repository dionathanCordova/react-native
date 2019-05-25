import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import Diaria from './Diaria';
import Ufm from './Ufm';

const Navegador = createBottomTabNavigator({
    Diaria: { screen: Diaria },
    Ufm: { screen: Ufm }        
})

const Abas = createAppContainer(Navegador)
// export default Abas;
export default class Home extends Component{

    static navigationOptions = {
        // header: null,
        title : 'home'
    }

    render( ) {
        return(
            <View>
                <Image source={require('../../assets/images/bandera.png')} style={styles.image} resizeMode='contain'/>
                <Abas />
                <Text>Teste</Text>  
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,   
        backgroundColor: '#CCCCCC'
    },
    Title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    image: {
        width: 150,
        height: 150,
        textAlign: 'center'
        
    }
})
