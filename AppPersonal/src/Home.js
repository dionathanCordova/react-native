
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import firebase from './Conexao';
export default class App extends Component {

    constructor(props) {
        super(props)

        firebase.auth().onAuthStateChanged((user) =>{
            if(user) {
                alert(user.uid)
            }
        })
    }

    static navigationOptions = {
        title : 'Início',
        header: null
    }

    render() {
        return (
        <View style={styles.container}>            
            <Image 
                source={{ uri: 'https://www.matrizesdebordados.com/image/cache/data/logotipos%20/academia1-800x800.png'}} 
                style={{width: 140, height: 140, borderRadius: 140/ 2, marginTop: 10}}             
            />
            <View style={styles.boxInfo}>
                <View style={styles.infoGeral}> 
                    <Text style={styles.infoNum}>59</Text>
                    <Text style={styles.infoTitle}>Alunos</Text>
                </View>
                <View style={styles.infoGeral}> 
                    <Text style={styles.infoNum}>5</Text>
                    <Text style={styles.infoTitle}>Avaliações</Text>
                </View>
                <View style={styles.infoGeral}> 
                    <Text style={styles.infoNum}>23</Text>
                    <Text style={styles.infoTitle}>Treinos</Text>
                </View>
            </View>
            <View style={styles.BoxMenus}>
                
                <TouchableOpacity style={styles.boxcadastro} onPress={() => this.props.navigation.navigate('Alunos')}>
                    <Image source={require('../assets/images/aluno.jpg')} resizeMode='contain' style={styles.img}/>
                    
                    <View style={styles.infoPage}>
                        <Text style={styles.Cadastrotitle}>Alunos</Text>
                    </View>   
                </TouchableOpacity>

                <TouchableOpacity style={styles.boxcadastro} onPress={() => this.props.navigation.navigate('Avaliacao')}>
                    <Image source={require('../assets/images/avaliacao.png')} resizeMode='contain' style={styles.img}/>
                    
                    <View style={styles.infoPage}>
                        <Text style={styles.Cadastrotitle}>Avaliações</Text>
                    </View>   
                </TouchableOpacity>

                <TouchableOpacity style={styles.boxcadastro} onPress={() => this.props.navigation.navigate('Exercicio')}>
                    <Image source={require('../assets/images/exercicio.png')} resizeMode='contain' style={styles.img}/>
                        
                    <View style={styles.infoPage}>                            
                        <Text style={styles.Cadastrotitle}>Exercícios</Text>
                    </View>  
                </TouchableOpacity>

                <TouchableOpacity style={styles.boxcadastro} onPress={() => this.props.navigation.navigate('Rank')}>
                    <Image source={require('../assets/images/rank.png')} resizeMode='contain' style={styles.img}/>
                        
                    <View style={styles.infoPage}> 
                        <Text style={styles.Cadastrotitle}>Ranking</Text>
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
    infoNum: {
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
