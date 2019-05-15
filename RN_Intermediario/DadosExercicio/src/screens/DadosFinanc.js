import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Slider, Picker, Button } from 'react-native';

export default class dadosFinanc extends Component{

    constructor(props) {
        super(props)
        this.state = {
            salario: 200.00,
            indiceBanco: 0,
            banco: [
                {bancos: 'ITAU'},
                {bancos: 'BRADENCO'},
                {bancos: 'BB'},
                {bancos: 'SANTANDER'},
            ],
            qtdCartao: 0
        }

        this.subCard = this.subCard.bind(this);
        this.addCard = this.addCard.bind(this);
    }
    
    // HEADER DA PAGINA
    static navigationOptions = {
        title: 'DADOS FiNANCEIROS',
    }   

    subCard() {
        let s = this.state;
        s.qtdCartao = s.qtdCartao - 1;
        this.setState(s);
    }

    addCard() {
        let s = this.state;
        s.qtdCartao = s.qtdCartao + 1;
        this.setState(s);
    }

    render() {
        let select_banco = this.state.banco.map((v, k) => {
            return <Picker.Item key={k} value={k} label={v.bancos} />
        });

        return(
            <View style={styles.MainContainer}>

                <View style={{width:300, textAlign: 'center', marginTop:10}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}> Salário </Text>
                    <Text>R$ {this.state.salario} Mensais</Text>
                    <Slider style={{marginTop:10}} value={this.state.salario} minimunValue={200.00}  maximumValue={30000} onValueChange={(v) => this.setState({salario: v})} />
                </View>

                <View style={{width:300, textAlign:'center', marginTop:10}}> 
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>Banco</Text>
                    <Picker selectedValue={this.state.indiceBanco} onValueChange={(item) => this.setState({indiceBanco: item})}>
                        {select_banco}
                    </Picker>
                </View>

                <View style={{width: 300, textAlign: 'center', marginTop:10}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}> QTD. de Cartões</Text>
                    
                    <View style={{width: 300, alignItems:'center', marginTop:10}}>
                        <View style={{width: 40}}>
                            <Button title=" + " onPress={this.addCard}/>
                        </View>

                        <Text style={{fontSize: 40, fontWeight: 'bold'}}> {this.state.qtdCartao} </Text>      

                        <View style={{width: 40}}>
                            <Button title=" - " onPress={this.subCard}/>
                        </View>
                    </View>
                </View>

                <View>
					<TouchableOpacity onPress={()=> this.props.navigation.navigate('infoDados')} activeOpacity={0.7} style={styles.button} >			
						<Text style={styles.buttonText}> SALVAR </Text>
					</TouchableOpacity>
				</View>

            </View>
        );
       
    };
}

const styles = StyleSheet.create({
    MainContainer: {	
		alignItems: 'center',
		flex: 1,
		margin: 4	
	},
    button: {	
		width: '100%',
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
})