import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Picker, Switch, Button } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from './Conexao';

export default class CadastroAluno extends Component{

    constructor(props) {
        super(props)

        this.state = {
            indiceSexo: '',
            sexo: [
                {nome: 'MASCUINO'},
                {nome: 'FEMININO'}
            ],
            email: '',
            nome: '',
            dataNascimento : '',
            idade : '',
            filmes: ''
        }

        this.cadastrar = this.cadastrar.bind(this);

       

    }

    static navigationOptions = {
        title: 'Cadastrar Aluno'
    }

    comparaIdade() {
        let DSaida = state.dateSaida.split('-');
        let ds = DSaida[0]+'/'+DSaida[1]+'/'+DSaida[2]
        
        let state = this.state;
        state.idade = 'filmes';

        this.setState(state);
    }

    cadastrar() {

        let state = this.state;

        let senha = 'personalapp';

        // firebase.auth().onAuthStateChanged((user) =>{
        //     if(user) {
        //         // this.props.navigation.navigate('Home')
        //         firebase.database().ref('usuarios').child(user.uid).set({
        //             nome:state.nome,
        //             dataNascimento: stat.dataNascimento,
        //             idade: '30',
        //             sexo: state.sexo[stat.indiceSexo].nome,
        //             userStatus: 'cliente',
        //             status: 'ativo'
        //         })
        //     }
        // })

        

        // firebase.auth().createUserWithEmailAndPassword(
        //     this.state.email,
        //     senha
        // ).catch((error) => {
        //     alert(error.code);
        // })

        // fetch('http://localhost:8080/Api/createUser')
        // .them((r) => r.json())
        // .then((json) => {
        //     // let state = this.state;
        //     // state.filmes = json.filmes;
        //     // this.setState(state);
        //     // })

        //     alert(json.msg);

        // }

        // CODIGO NO APP REACT NATIVE
		let formData = new FormData();
		formData.append("nome", state.nome);
		// formData.append("data_saida", ds);
		// formData.append("hora_retorno", HoraRetorno);
		// formData.append("data_retorno", dr);
		// formData.append("distancia", distancia);
		// formData.append("estado", estado);
		// formData.append("curso", curso);
		
		// fetch('https://wspersonalapp.herokuapp.com/createUser', {
		// 	method: 'POST',	
		// 	headers: {
		// 		Accept:'application/json',
		// 		'Content-Type': 'multipart/form-data',
		// 	  },
		// 	body: formData,
		// })
		// .then((response) => response.json())
		// .then((responseJson) => {
        //     alert(responseJson.msg);
			
		// })
		// .catch((error) => {
		// 	console.error(error);
        // });
        
        
        // fetch('https://filmespy.herokuapp.com/api/v1/filmes').then((r) => r.json()).then((json) => {
		// 	let state = this.state;
		// 	state.filmes = json.filmes;
		// 	state.loading = false;
        //     this.setState(state);
        // })
        
        alert(senha);
    
    }

    render() {	
        const Sexo = this.state.sexo.map((v, k) => {
            return <Picker.Item key={k} value={k} label={v.nome} style={{borderWidth: 1,
                margin: 10,
                borderRadius: 6}} />
        })

        return(
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.Main}>
                        <Text>{this.state.filmes}</Text>
                        <View style={styles.boxInput}>
                            <Text style={styles.label}>Nome</Text>
                            <TextInput style={styles.TextInput} placeholder='Nome Completo' onChangeText={(nome) => this.setState({nome})}/>
                        </View>

                        <View style={styles.boxInput}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput style={styles.TextInput} placeholder='Email'  onChangeText={(email) => this.setState({email})}/>
                        </View>

                        <View style={[styles.boxInput]}>
                            <Text style={styles.label}>Data de Nascimento</Text>
                            <DatePicker
                                style={{width: 280, marginLeft: 10, marginTop:10}}
                                date={this.state.dateRetorno} //initial date from state
                                mode="date" //The enum of date, datetime and time
                                placeholder="Selecione a Data"
                                format="DD-MM-YYYY"
                                minDate="01-01-1919"
                                maxDate="01-01-2050"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 0
                                    },
                                    dateInput: {
                                        borderColor: '#CCC',
                                        borderRadius: 6,
                                        marginLeft: 36
                                    }
                                }}
                                onDateChange={(date) => {this.setState({dataNascimento: date})}}
                            />
                        </View>	

                        <View style={styles.boxInput}>
                            <Text style={styles.label}>Sexo</Text>
                            <Picker selectedValue={this.state.indiceSexo} onValueChange={(itemValue,itemIndex) => this.setState({indiceSexo: itemValue})}  style={styles.picker}>
                                {Sexo}
                            </Picker>
                        </View>	


                        {/* <View style={styles.boxInput}>
                            <Text style={styles.label}>Motivo da diária</Text>
                            <Switch style={{marginRight: 250}}value={this.state.curso} onValueChange={(v) => this.setState({curso: v})}/>
                            <Text style={{fontSize: 10, fontWeight: 'bold', color: 'green'}}>{(this.state.curso)? 'Motivo: Curso' : 'Motivo Outros'}</Text>
                        </View> */}
                        
                        <Button title='CADASTRAR' onPress={this.cadastrar}/>
                    </View>
                    
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#CCC'
    },
    Main: {
        flex:1,
        backgroundColor: '#FFF',
        borderRadius: 1,
        margin:10,
    },
    boxInput:{
        margin: 15,
        backgroundColor: '#F8F8FF',
        height: 120,
	},
    inputTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    TextInput:{
        textAlign:'center',
        borderWidth: 1,
        margin: 10,
        borderRadius: 6,
        borderColor: '#CCC'
    },
    label:{        
        paddingTop: 10,
        paddingLeft: 10,
		fontSize: 20,
		fontWeight: 'bold'
	},
    picker:{
		borderColor: '#000',
    },
    boxDatas:{		
		margin:10,
		marginLeft: 15,
        backgroundColor: '#F8F8FF',
        height: 100,
		width:310,
	},

})