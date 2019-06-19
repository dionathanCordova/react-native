import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity, FlatList, Image, Button} from 'react-native';

export default class Alunos extends Component{

    static navigationOptions = {
        title: 'Alunos'
    }

    constructor(props) {
        super(props)

        this.state = {
            alunos : [
                {nome: 'Fernanda Soares', sexo: 'Feminino', status: 'ativo', avatar : '.assets/images/rank.png', statusAvatar : 0},
                {nome: 'Lais Talves', sexo: 'Feminino', status: 'ativo', avatar : '.assets/images/rank.png', statusAvatar : 0},
                {nome: 'Juliana Cardoso', sexo: 'Feminino', status: 'ativo', avatar : '.assets/images/rank.png', statusAvatar : 0},
                {nome: 'Ronaldo Azevedo', sexo: 'Masculino', status: 'inativo', avatar : '.assets/images/rank.png', statusAvatar : 0},
                {nome: 'João Macedo', sexo: 'Masculino', status: 'ativo', avatar : '.assets/images/rank.png', statusAvatar : 0},
                {nome: 'Henrique da Silva', sexo: 'Masculino', status: 'inativo', avatar : '.assets/images/rank.png', statusAvatar : 0},
                {nome: 'Carlos Maceió', sexo: 'Masculino', status: 'ativo', avatar : '.assets/images/rank.png', statusAvatar : 0}
            ],
        }
    }
    
    render() {
        return(
            <View style={styles.container}>     
                
                <View style={styles.BoxAlunos}>
                    <FlatList 
                        data={this.state.alunos}
                        renderItem={({item}) => <ListaAlunos data={item} navigation={this.props.navigation} funcaoModal={this.abrirModal}/>}
                        keyExtractor={(item, index) => item.nome}                      
                    />        
                </View>       
                <View style={{alignItems: 'flex-end', zIndex: 1}}>
                   
                </View>

                <TouchableOpacity onPress={() =>  this.props.navigation.navigate('CadastroAluno')} style={styles.FacebookStyle} activeOpacity={0.5}>
                    <Image onPress={() => alert('teste')} source={require('../assets/images/cadastroAluno.png')} resizeMode='contain' style={[styles.img, {marginTop: 10, marginBottom: 10 }]}/>
                </TouchableOpacity>
            </View>
        )
    }
}

class ListaAlunos extends Component {

    constructor(props) {
        super(props)

        this.redirect = this.redirect.bind(this);
    }

    redirect() {
        this.props.navigation.navigate('AlunosGeral', {nome: this.props.data.nome})       
    }    

    render( ) {
        return(
            <TouchableOpacity onPress={this.redirect} style={styles.listaAlunos}>
                <View style={{flex: 1}}>
                    <Image source={(this.props.data.sexo == 'Feminino') ? require('../assets/images/PersonFem.png') : require('../assets/images/PersonMasc.png')} resizeMode='contain' style={styles.img}/>
                </View>
                <View style={{marginLeft: 10, flex: 4}}>
                    <Text style={styles.AlunoNome}>{this.props.data.nome}</Text>  
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                    <Image source={(this.props.data.status == 'ativo') ? require('../assets/images/ativo.png') : require('../assets/images/inativo.png')} style={{width: 20, height:20, }} />
                </View>              
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EEE9E9'
    },
    pesquisa: {
        margin: 10,
        height: 50,
        textAlign: 'center',
        borderColor: '#999',
        borderWidth: 1,
    },
    BoxAlunos:{
        flex: 5,
        flexDirection: 'column',
        width:340
    },  
    listaAlunos: {
        borderRadius: 5,
        height: 80,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: 50,
        height: 50,
        borderRadius: 300/2,
    },  
    AlunoNome:{
        marginLeft: 30,
        fontSize: 20,
        fontWeight: 'bold'
    },
})