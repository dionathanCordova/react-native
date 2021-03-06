import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, ImageBackground, Image, Dimensions, TouchableOpacity} from 'react-native';
// import firebase from './Conexao';
import firebase from './Conexao';
import bgImage from '../assets/images/rank.png'
import Icon from 'react-native-vector-icons/Ionicons'

const { width: WIDTH } = Dimensions.get('window')

export default class Login extends Component{

    static navigationOptions = {
        title : 'Início',
        header: null
    }

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            senha: ''
        }

        firebase.auth().signOut();

        

        this.logar = this.logar.bind(this);
    }

    logar() {

        firebase.auth().onAuthStateChanged((user) =>{
            if(user) {
                this.props.navigation.navigate('Home')
            }
        })
        
        let state = this.state;
        
        firebase.auth().signInWithEmailAndPassword(
            state.email, 
            state.senha
        ).catch((error) => {
            alert(error.code)
        })

        
        // firebase.addAuthListener((user) => {
        //     if(user) {
        //         if(firebase.auth().currentUser) {
        //             firebase.database().ref('usuarios')
        //             .child(firebase.auth().currentUser.uid)
        //             .once('value')
        //             .then(callback);
        //         }
                
        //     }
        // });

    }
 
    render() {
        return(
            <View>
                <View style={styles.ImageBackGround}>

                    <View style={{marginTop: 100, alignItems: 'center'}}>
                        <Image 
                            source={{ uri: 'https://www.matrizesdebordados.com/image/cache/data/logotipos%20/academia1-800x800.png'}} 
                            style={{width: 140, height: 140, borderRadius: 140/ 2}}             
                        />

                        
                        <View style={styles.boxInput}>
                            <Icon name={'ios-person'} size={28} color={'#000'} style={styles.inputIcon} />
                            <TextInput placeholder={'Login'} style={styles.input} onChangeText={(email) => this.setState({email})}/>
                        </View>

                        <View style={styles.boxInput}>
                            <Icon name={'ios-lock'} size={28} color={'#000'} style={styles.inputIcon} />
                            <TextInput secureTextEntry={true} placeholder={'Senha'} style={styles.input} onChangeText={(senha) => this.setState({senha})}/>

                             
                            <TouchableOpacity style={styles.btnEye}>
                                <Icon name={'ios-eye'} size={28} color={'#000'} style={styles.inputIcon} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.btnLogin} onPress={this.logar}>
                            <Text style={styles.text}>Login</Text> 
                        </TouchableOpacity>
                    </View>
                    

                    {/* <View style={styles.boxMainInput}> */}
                        
                    {/* </View> */}
                    
               
               </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ImageBackGround:{
        // marginTop: 80,
        flex:1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxMainInput: {
        marginTop: 10,
    },
    boxInput:{
        marginBottom: 60,
    },
    input:{
        width : WIDTH - 40,
        height: 46,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        // backgroundColor: 'rgba(0, 0, 0, 0.35)',
        borderWidth: 1,
        color: '#FF8C00',
        marginHorizontal: 25
    },
    inputIcon:{
        position: 'absolute',
        top: 8,
        left: 37
    },
    btnEye: {
        position: 'absolute',
        top: 8,
        right: 37
    },
    btnLogin: {
        width : WIDTH - 40,
        height: 46,
        borderRadius: 25,
        backgroundColor: '#452577',
        justifyContent: 'center',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center'
    }
})