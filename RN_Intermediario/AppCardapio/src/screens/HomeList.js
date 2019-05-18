import React, { Component } from 'react';
 
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
 
export default class HomeList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [
                {
                    key: '1',
                    title: 'Prato Executivo',
                    img: require('../../assets/images/tipos/pe.png'),
                    description: "Pratos já prontos para comer.",
                    bg: '#e35339',
                    products: [
                        {key: '1', name: 'Prato de Frango', img: require('../../assets/images/cardapio/pe/executivos_frang_.png' ), valor: 'R$ 25,50'},
                        {key: '2', name: 'Prato de Peixe', img: require('../../assets/images/cardapio/pe/executivos_peix_.png' ), valor: 'R$ 35,40'},
                        {key: '3', name: 'Prato de Picanha', img: require('../../assets/images/cardapio/pe/executivos_picanh_.png' ), valor: 'R$ 64,00'},
                    ]
                },
                {
                    key: '2',
                    title: 'Saladas',
                    img: require('../../assets/images/tipos/saladas.png'),
                    description: "Pratos saldáveis",
                    bg: '#a6bb24',
                    products: [
                        {key: '1', name: 'Salada de Frango', img: require('../../assets/images/cardapio/saladas/salada-fr.png' ), valor: 'R$ 15,50'},
                        {key: '2', name: 'Salada água doce', img: require('../../assets/images/cardapio/saladas/salada_aguadoc_.png' ), valor: 'R$ 19,00'},
                        {key: '3', name: 'Salada de Salmão', img: require('../../assets/images/cardapio/saladas/salada_salma.png' ), valor: 'R$ 22,30'},
                    ]
                },
                {
                    key: '3',
                    title: 'Bebidas',
                    img: require('../../assets/images/tipos/bebidas.png'),
                    description: "Mata a sede",
                    bg: '#079ed4',
                    products: [
                        {key: '1', name: 'Caipirosca', img: require('../../assets/images/cardapio/bebidas/capirosc_3.png'), valor: 'R$ 6,00'},
                        {key: '2', name: 'Cookies Crea', img: require('../../assets/images/cardapio/bebidas/cookies_crea.png'), valor: 'R$ 8,00'},
                        {key: '3', name: 'Morango GD', img: require('../../assets/images/cardapio/bebidas/morango_gd.png' ), valor: 'R$ 10,00'},
                        {key: '4', name: 'Prata', img: require('../../assets/images/cardapio/bebidas/patra.png' ), valor: 'R$ 50,50'},
                        {key: '5', name: 'Suco Fitness', img: require('../../assets/images/cardapio/bebidas/suco_fitines_gd.png'), valor: 'R$ 100,00'},
                    ]
                },
                {
                    key: '4',
                    title: 'Sobremesas',
                    img: require('../../assets/images/tipos/sobremesa.png'),
                    description: "Se Gosta de Doce",
                    bg: '#fcb81c',
                    products: [
                        {key: '1', name: 'Brownie', img: require('../../assets/images/cardapio/sobremesas/brownie_gd.png' ), valor: 'R$ 12,00'},
                        {key: '2', name: 'Creme Papaya', img: require('../../assets/images/cardapio/sobremesas/creme_papaya_cassis_gd.png' ), valor: 'R$ 18,00'},
                        {key: '3', name: 'Delicia Gelada', img: require('../../assets/images/cardapio/sobremesas/delicia_gelada_gd.png' ), valor: 'R$ 20,00'},
                    ]
                }
            ]
        }
    }
 
  static navigationOptions =
    {
      title: 'Restaurante Teste',
      tabBarLabel: 'Home',
    };
 
  render() {
 
    return (
 
      <View style={styles.MainContainer}> 
        <FlatList data={this.state.list} renderItem={({item}) => <Lista data={item} navigation={this.props.navigation}/>} />
      
 
        {/* <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Profile')}> 
          <Text style={styles.text}>Goto Profile Screen</Text> 
        </TouchableOpacity> */}
 
      </View>
 
    );
  }
}


class Lista  extends Component{
    
    constructor(props) {
        super(props)
        this.state = {};

        this.click = this.click.bind(this);
    }

    click() {
        this.props.navigation.navigate('HomeProducts', {title: this.props.data.title, produtos: this.props.data.products});
    }

    render() {
        return (
            <TouchableOpacity onPress={this.click} style={[styles.listaItem, {backgroundColor: this.props.data.bg}]}>
                
                <View style={[styles.listaItem, {backgroundColor: this.props.data.bg}]}>
                    <Image source={this.props.data.img} style={styles.listaImages} />
                    <View>
                        <Text style={styles.prodTitle}>{this.props.data.title}</Text>
                        <Text style={styles.prodDesc}>{this.props.data.description}</Text>
                    </View>
                </View>
             </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
 
    MainContainer: {
    
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#f5fcff',
        // padding: 11
    
    },
    
    button: {
        alignItems: 'center',
        backgroundColor: '#43A047',
        padding: 12,
        width: 280,
        marginTop: 12,
    },
    
    text: { 
        color: '#fff'
    },
    listaItem: {
        height: 100,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    listaImages:{
        width: 64,
        height: 64,
        marginLeft: 20,
        marginRight: 20
    },
    prodTitle:{
        
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
    prodDesc:{
        
        color:'#FFFFFF',
        fontSize: 16          
    }
 
});