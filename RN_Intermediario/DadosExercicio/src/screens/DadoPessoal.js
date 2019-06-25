import React, { Component } from 'react';
 
import { StyleSheet, Text, View, Alert, TouchableOpacity, TextInput, Picker, Slider, Switch, Button, AsyncStorage } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import { Switch } from 'react-native-gesture-handler';
// import Slider from "react-native-slider"

export default class DadoPessoal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			indice:0,
			dia: 0,
			diaNascimento:[
				{dia:'1'},
				{dia:'2'},
				{dia:'3'},
				{dia:'4'},
				{dia:'5'},
				{dia:'6'},
				{dia:'7'},
				{dia:'8'},
				{dia:'9'},
				{dia:'10'},
				{dia:'11'},
				{dia:'12'},
				{dia:'13'},
				{dia:'14'},
				{dia:'15'},
				{dia:'16'},
				{dia:'17'},
				{dia:'18'},
				{dia:'19'},
				{dia:'20'},
				{dia:'21'},
				{dia:'22'},
				{dia:'23'},
				{dia:'24'},
				{dia:'25'},
				{dia:'26'},
				{dia:'27'},
				{dia:'28'},
				{dia:'29'},
				{dia:'30'},
			],
			indiceMes: 0,
			mes: 0,
			mesNascimento:[
				{mes:'1'},
				{mes:'2'},
				{mes:'3'},
				{mes:'4'},
				{mes:'5'},
				{mes:'6'},
				{mes:'7'},
				{mes:'8'},
				{mes:'9'},
				{mes:'10'},
				{mes:'11'},
				{mes:'12'},
			],
			indiceAno: 0,
			ano: 0,
			anoNascimento:[
				{ano:'2019'},
				{ano:'2018'},
				{ano:'2017'},
				{ano:'2016'},
				{ano:'2015'},
				{ano:'2014'},
				{ano:'2013'},
				{ano:'2012'},
				{ano:'2011'},
				{ano:'2010'},
				{ano:'2009'},
				{ano:'2008'},
			],
			indiceSexo:0,
			sex: '',
			sexo: [
				{sexos:'Masculino'},
				{sexos:'Feminino'}
			],
			altura: 1.0,
			peso: 10,
			doador: false,
		};

    }

    // HEADER DA PAGINA
    static navigationOptions = {
        title: 'DADOS PESSOAIS',
    }   

	render() {

		let dia_Nascimento = this.state.diaNascimento.map((v, k) => {
			return <Picker.Item key={k} value={k} label={v.dia}/>
		});

		let mes_nascimento = this.state.mesNascimento.map((v, k) => {
			return <Picker.Item key={k} value={k} label={v.mes} />
		});

		let ano_nascimento = this.state.anoNascimento.map((v, k) => {
			return <Picker.Item key={k} value={k} label={v.ano} />
		});

		let sexo = this.state.sexo.map((v,k) => {
			return <Picker.Item key={k} value={k} label={v.sexos} />
		});

		return (
			<View style={styles.MainContainer}>

				<ScrollView>
					<View style={{textAlign:'center', width: 300}} >
						<Text style={{fontSize: 20, fontWeight: 'bold', }}>Nome</Text>
						<TextInput placeholder="Informe seu Nome"  onChangeText={(data) => {this.setState({ nome: data }); AsyncStorage.setItem('nome', data)}} style={styles.textInputStyle} underlineColorAndroid='transparent' />
					</View>

					
					<View style={styles.boxDatas}>

						<View style={{flex:1, textAlign:'center'}} >
							<Text style={{fontSize: 20, fontWeight: 'bold',	marginTop:20, marginLeft:10}}>Dia</Text>
							<Picker selectedValue={this.state.indice} onValueChange={(itemValue) => {this.setState({indice:itemValue}); AsyncStorage.setItem('diaNascimento', this.state.diaNascimento[itemValue].dia)}}>
								{dia_Nascimento}
							</Picker>
						</View>

						<View style={{flex:1, textAlign:'center'}} >
							<Text style={{fontSize: 20, fontWeight: 'bold', marginTop:20, marginLeft:10}}>Mês</Text>
							<Picker selectedValue={this.state.indiceMes} onValueChange={(item) => {this.setState({indiceMes : item}); AsyncStorage.setItem("mesNascimento", this.state.mesNascimento[item].mes)}} >
								{mes_nascimento}
							</Picker>
						</View>

						<View style={{flex:1, textAlign:'center'}} >
							<Text style={{fontSize: 20, fontWeight: 'bold', marginTop:20, marginLeft:10}}>Ano</Text>
							<Picker selectedValue={this.state.indiceAno} onValueChange={(item) => {this.setState({indiceAno : item});  AsyncStorage.setItem('anoNascimento', this.state.anoNascimento[item].ano) }} >
								{ano_nascimento}
							</Picker>
						</View>

					</View>


					<View style={{width:300, textAlign:'center', marginTop:10}}>
						<Text style={{fontSize: 20, fontWeight: 'bold'}}>Sexo</Text>
						<Picker selectedValue={this.state.indiceSexo} onValueChange={(item) => {this.setState({indiceSexo: item}); AsyncStorage.setItem('sex', this.state.sexo[item].sexos)}}>
							{sexo}
						</Picker>
					</View>

					<View style={{width:300, textAlign:'center', marginTop:10}}>
						<Text style={{fontSize: 20, fontWeight: 'bold'}}>Altura</Text>
						<Text>{this.state.altura} m</Text>
						<Slider style={{width: '100%'}} value={this.state.altura} minimumValue={1.0} maximumValue={3.0}  onValueChange={(v) => {this.setState({altura: v}); AsyncStorage.setItem('altura', v)}}/>
					</View>

					<View style={{width:300, textAlign: 'center', marginTop:10}}>
						<Text style={{fontSize: 20, fontWeight: 'bold'}}>Peso</Text>
						<Text>{this.state.peso} Kg</Text>
						<Slider value={this.state.peso} step={1} minimumValue={10} maximumValue={300} onValueChange={(v) => {this.setState({peso: v}); AsyncStorage.setItem('peso', v)}}/>
					</View>

					<View style={{width:300, textAlign: 'center', marginTop:10}}>
						<Text style={{fontSize: 20, fontWeight: 'bold'}}>Doador de Órgão</Text>
						<Text>{(this.state.doador)? 'Sim' : 'Não'}</Text>
						<Switch onValueChange={(v) => {this.setState({doador: v}); AsyncStorage.setItem('doador', this.state.doador)}} value={this.state.doador} ></Switch>
					</View>

				</ScrollView>

				<Button  title='DADOS FINANCEIROS' onPress={() => AsyncStorage.getItem('altura').then((value) => {alert(value)}) } />

			</View>
		);
	}
 

	joinData = () => {	
		this.array.push({title : this.state.textInput_Holder});	
		this.setState({ arrayHolder: [...this.array] });	
	} 

	GetItem(item) {	
		Alert.alert(item);	
	}
}
 
const styles = StyleSheet.create({
 
	MainContainer: {	
		alignItems: 'center',
		flex: 1,
		margin: 4	
	},
	textInputStyle: {	
		textAlign: 'center',
		height: 40,
		width: '100%',
		borderWidth: 1,
		borderColor: '#4CAF50',
		borderRadius: 7,
		marginTop: 12
	},
	boxDatas:{
		flex:1,
		flexDirection:'row',
		width:320,
	},
	titulo:{
		fontSize: 20,
		fontWeight: 'bold',
	}
 
});