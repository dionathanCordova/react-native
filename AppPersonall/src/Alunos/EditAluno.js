import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Picker, Switch, Button, AsyncStorage } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { ScrollView } from 'react-native-gesture-handler';

export default class CadastroAluno extends Component{

    constructor(props) {
        super(props)

        this.state = {
            dateNascimento:"",
            selectedSexo: 'MASCULINO',
            indiceSexo: '',
            sexo: [
                {nome: 'MASCUINO'},
                {nome: 'FEMININO'}
            ],
            email: '',
            nome: this.props.navigation.getParam('nome'),
            dataNascimento : '',
            personal_id: ''
        }

        this.cadastrar = this.cadastrar.bind(this);   

    }

    static navigationOptions = {
        title: 'Cadastrar Aluno'
    }

    cadastrar() {

        let state = this.state;

        let senha = 'personalapp';
        let nome = state.nome;
        let email = state.email;
        let dataNascimento = state.dataNascimento;
        let sexo = state.selectedSexo;
        let personal_id = state.personal_id;

        // CODIGO NO APP REACT NATIVE
		let formData = new FormData();
        formData.append("nome", nome);
        formData.append("email", email);
        formData.append("senha", senha);
        formData.append("data_nascimento", dataNascimento);
        formData.append("sexo", sexo);
        formData.append("personal_id", personal_id);
			
		fetch('https://wspersonalapp.herokuapp.com/api/createUser', {
			method: 'POST',	
			headers: {
				Accept:'application/json',
				'Content-Type': 'multipart/form-data',
			  },
			body: formData,
		})
		.then((response) => response.json())
		.then((responseJson) => {
            alert('Mensagem: ' + responseJson.msg);			
		})
		.catch((error) => {
			alert('Erro: ' + error);
        });
    
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
                            <TextInput style={styles.TextInput} placeholder='Nome Completo' value={this.state.nome} onChangeText={(nome) => this.setState({nome})}/>
                        </View>

                        <View style={styles.boxInput}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput style={styles.TextInput} placeholder='Email'  onChangeText={(email) => this.setState({email})}/>
                        </View>

                        <View style={[styles.boxInput]}>
                            <Text style={styles.label}>Data de Nascimento</Text>
                            <DatePicker
                                style={{width: 280, marginLeft: 10, marginTop:10}}
                                date={this.state.dateNascimento} //initial date from state
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
                                onDateChange={(date) => {this.setState({dateNascimento: date})}}
                            />
                        </View>	

                        <View style={styles.boxInput}>
                            <Text style={styles.label}>Sexo</Text>
                            <Picker selectedValue={this.state.indiceSexo} onValueChange={(itemValue,itemIndex) => this.setState({indiceSexo: itemValue, selectedSexo: this.state.sexo[itemValue].nome})}  style={styles.picker}>
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