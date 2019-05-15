import React, { Component } from 'react';
 
import { StyleSheet, FlatList, Text, View, Alert, TouchableOpacity, TextInput, Picker } from 'react-native';
 
export default class Myproject extends Component {
	constructor(props) {
		super(props);
		this.state = {
			indice:0,
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
		};
	}

	render() {

		let dia_Nascimento = this.state.diaNascimento.map((v, k) => {
			return <Picker.Item key={k} value={k} label={v.dia}/>
		});

		let mes_nascimento = this.state.mesNascimento.map((v, k) => {
			return <Picker.Item key={k} value={k} label={v.mes} />
		})

		return (
			<View style={styles.MainContainer}>
				<Text style={styles.titulo}>DADOS PESSOAIS</Text>

				<TextInput placeholder="Informe seu Nome"  onChangeText={data => this.setState({ nome: data })} style={styles.textInputStyle} underlineColorAndroid='transparent' />
				
				<View style={styles.boxDatas}>
					
					<View style={{width: 80}} >
						<Text>Dia</Text>
						<Picker selectedValue={this.state.indice} onValueChange={(itemValue, itemIndex) => this.setState({indice:itemValue})}>
							{dia_Nascimento}
						</Picker>
					</View>

					<View style={{width: 80}} >
						<Text>Mês</Text>
						<Picker selectedValue={this.state.indiceMes} onValueChange={(item, value) => this.setState({indiceMes : item})} >
							{mes_nascimento}
						</Picker>
					</View>
				</View>
				

				<TouchableOpacity onPress={()=> alert(this.state.nome)} activeOpacity={0.7} style={styles.button} >			
					<Text style={styles.buttonText}> Add Values To FlatList </Text>
				</TouchableOpacity>
			</View>
		);
	}
 

	joinData = () => {
	
		this.array.push({title : this.state.textInput_Holder});
	
		this.setState({ arrayHolder: [...this.array] })
	
	}
 

  GetItem(item) {
 
    Alert.alert(item);
 
  }
 
 
	
}
 
const styles = StyleSheet.create({
 
	MainContainer: {	
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		margin: 4	
	},
	
	textInputStyle: {	
		textAlign: 'center',
		height: 40,
		width: '90%',
		borderWidth: 1,
		borderColor: '#4CAF50',
		borderRadius: 7,
		marginTop: 12
	},

	boxDatas:{
		flex:1,
		flexDirection:'column',
		// justifyContent: 'center',
		// alignItems: 'center',
		backgroundColor:'grey', 
		marginTop:22,  
		width:310
	},
	
	button: {	
		width: '90%',
		height: 40,
		padding: 10,
		backgroundColor: '#4CAF50',
		borderRadius: 8,
		marginTop: 10
	},
	
	buttonText: {
		color: '#fff',
		textAlign: 'center',
	},

	titulo:{
		fontSize: 20,
		fontWeight: 'bold',
	}
 
});