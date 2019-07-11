/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class CadastroAluno extends Component {

    static navigationOptions = {
        title : 'Opções Alunos',
    }

    constructor(props) {
        super(props)

        this.setStatus = this.setStatus.bind(this);
    }

    setStatus() {

        let formData = new FormData();
        formData.append('id_usuario', this.props.navigation.getParam('id'));

        fetch('https://wspersonalapp.herokuapp.com/api/setStatus', {
			method: 'POST',	
			headers: {
				Accept:'application/json',
				'Content-Type': 'multipart/form-data',
            },
			body: formData,
		})
		.then((response) => response.json())
		.then((responseJson) => {
            if(responseJson.msg == 'true') {

                this.props.navigation.navigate('Home')
                               
            }else{
                alert('Dados Incorretos, tente novamente');
            }        
			
		})
		.catch((error) => {
			console.error(error);
        });
    }


    render() {
        return (
        <View style={styles.container}>            
           
            <View style={styles.BoxMenus}>

                <View style={styles.boxInfo}>
                    <View style={styles.infoGeral}> 
                        <Text style={styles.infoNome}> {this.props.navigation.getParam('nome')}</Text>
                    </View>
                </View>
             
                <TouchableOpacity style={styles.boxcadastro} onPress={() => this.props.navigation.navigate('AlunosEdit', {nome: this.props.navigation.getParam('nome'), id:this.props.navigation.getParam('id') })}>
                    <Image source={require('../../assets/images/aluno.jpg')} resizeMode='contain' style={styles.img}/>
                    
                    <View style={styles.infoPage}>
                        <Text style={styles.Cadastrotitle}>Atualizar</Text>
                    </View>   
                </TouchableOpacity>

                <TouchableOpacity style={styles.boxcadastro} onPress={() => this.props.navigation.navigate('Avaliacao')}>
                    <Image source={require('../../assets/images/avaliacao.png')} resizeMode='contain' style={styles.img}/>
                    
                    <View style={styles.infoPage}>
                        <Text style={styles.Cadastrotitle}>Avaliações</Text>
                    </View>   
                </TouchableOpacity>

                <TouchableOpacity style={styles.boxcadastro} onPress={() => this.props.navigation.navigate('Exercicio')}>
                    <Image source={require('../../assets/images/exercicio.png')} resizeMode='contain' style={styles.img}/>
                        
                    <View style={styles.infoPage}>                            
                        <Text style={styles.Cadastrotitle}>Treinos</Text>
                    </View>  
                </TouchableOpacity>

                <TouchableOpacity style={styles.boxcadastro} onPress={() => this.props.navigation.navigate('Rank')}>
                    <Image source={require('../../assets/images/calendario.png')} resizeMode='contain' style={styles.img}/>
                        
                    <View style={styles.infoPage}> 
                        <Text style={styles.Cadastrotitle}>Calendário</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boxcadastro} onPress={() => this.setStatus()}>
                    <Image source={require('../../assets/images/ativardesativar.jpg')} resizeMode='contain' style={styles.img}/>
                        
                    <View style={styles.infoPage}> 
                        <Text style={styles.Cadastrotitle}>Ativar / Desativar</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boxcadastro} onPress={() => this.props.navigation.navigate('Rank')}>
                    <Image source={require('../../assets/images/excluir.png')} resizeMode='contain' style={styles.img}/>
                        
                    <View style={styles.infoPage}> 
                        <Text style={styles.Cadastrotitle}>Excluir</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EEE9E9'
    },
    boxInfo: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        textAlign: 'center',
        color: '#333333',
        height: 50,
        width: 350,
        backgroundColor: '#CCC'
    },
    infoGeral: {
        flex:1,
        textAlign: 'center',     
        alignItems: 'center', 
        paddingTop: 2, 
        justifyContent: 'center',
        backgroundColor: '#9ACD32',
        borderRadius: 2,
    },
    infoNome: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#FFF'
    },
    BoxMenus:{
        flex: 5,
        flexDirection: 'column',
        width:350
    },
    boxcadastro: {
        borderRadius: 5,

        height: 100,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },   
    infoPage:{
        marginLeft:20,        
        alignItems: 'center',
    },
    img: {
        width: 40,
        height: 40,
        marginLeft: 20,
    },  
    Cadastrotitle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginLeft: 50,     
        // color:'#FFF',
        fontWeight: 'bold',   
    },
    
});
