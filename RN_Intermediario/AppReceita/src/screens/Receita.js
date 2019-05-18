import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { createMaterialTopTabNavigator, createAppContainer} from 'react-navigation';

import ReceitaIgrediente from './ReceitaIgrediente';
import ReceitaModo from './ReceitaModo';
import ReceitaResumo from './ReceitaResumo';

const Navegador = createMaterialTopTabNavigator({
    ReceitaResumo : {screen: ReceitaResumo},
    ReceitaIgrediente :{screen : ReceitaIgrediente},
    ReceitaModo :{screen : ReceitaModo},    
});

const Abas = createAppContainer(Navegador);


export default class Receitas extends Component{

    static navigationOptions = {
        title: 'Receitas',
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            receita: props.navigation.getParam('receita')
        }
    }
    
    render () {
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.btnBack}>     
                    <Image source={require('../../assets/images/back.png')} style={styles.backImage} />
                </TouchableOpacity>

                <Image  source={{uri:this.state.receita.imagem}} style={styles.receitaImagem} />
                <Abas screenProps={this.state.receita}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,       
        backgroundColor: '#CCCCCC'
    },
    btnBack: {
        marginTop:10,
        width: 26,
        height: 26,
        marginLeft: 10,
        marginTop: 5,
        zIndex: 99
    },
    
    backImage: {
        width: 26,
        height: 26
    },
    receitaImagem: {
        height: 200,
        marginTop: -51
    }
})