import React, {Component} from 'react';
import { createBottomTabNavigator} from 'react-navigation';
// import {View, Text, StyleSheet, Button} from 'react-native';

import Tela1 from './Tela1';
import Tela2 from './Tela2';

const HometabNavigator = createBottomTabNavigator({
    Tela1: {
        screen: Tela1
    },
    Tela2:{
        screen: Tela2
    }
})

export default HometabNavigator;

// export default class Tela2 extends Component {


//     static navigationOptions = {
//         title: 'Home Tab'
//     }

//     render() {
//         return(
//             <View>
//                 <Text>Nome: {this.props.navigation.getParam('nome')}</Text>
//                 <Text>Idade: {this.props.navigation.getParam('idade')}</Text>
//                 <Button title='Voltar' onPress={() => this.props.navigation.goBack()} />
//             </View>
//         );
//     }
// }