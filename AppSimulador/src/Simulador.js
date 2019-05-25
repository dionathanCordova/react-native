import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';

export default class Simulador extends Component{

    constructor(props) {
        super(props)

        this.state = {
            paginas: [
                {
                    key: '1',
                    pag_title : 'Lei',
                    pag_desc : 'Dispõe sobre Lei Nº 1142/95',
                    pag_uri: './Leis',                    
                },
                {
                    Key: '2',
                    pag_title : 'Diaria',
                    pag_desc : 'Diárias de servidor público',
                    pag_uri: './Diaria', 
                },
                {
                    Key: '3',
                    pag_title : 'Ufm',
                    pag_desc : 'Diárias de agentes políticos',
                    pag_uri: './Ufm', 
                }
                     

            ]
        }
    }

    static navigationOptions = {
        title : 'Simulador de valores'
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.state.paginas}
                    renderItem={({item}) => <ListaPage data={item} navigation={this.props.navigation}/>}
                    keyExtractor={(item, index) => item.pag_title}
                />
            </View>
        );
    }
}

class ListaPage extends Component {
    constructor(props) {
        super(props)

        this.redirect = this.redirect.bind(this);
    }

    redirect() {
        this.props.navigation.navigate(this.props.data.pag_title)
    }

    render( ) {
        return(
            <TouchableOpacity onPress={this.redirect} style={styles.listaItem}>
                <Image source={require('../assets/images/bandera.png')} resizeMode='contain' style={styles.imgLista}/>
                <View style={styles.infoPage}>
                    <Text style={styles.PagTitle}>{this.props.data.pag_title}</Text>
                    <Text style={styles.PagDesc}>{this.props.data.pag_desc}</Text>
                </View>                
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCCCCC'
    },
    listaItem:{
        height: 100,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 5,
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgLista:{
        width: 70,
        height: 70,
        marginLeft: 20
    },
    infoPage:{
        marginLeft:20
    },
    PagTitle:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    PagDesc:{
        fontSize: 15,
    }
})