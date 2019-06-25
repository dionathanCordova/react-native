import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Picker, TextInput, Switch, Button} from 'react-native';
import DatePicker from 'react-native-datepicker';
import { ScrollView } from 'react-native-gesture-handler';

export default class Ufm extends Component{

    constructor(props) {
        super(props) 

        this.state = {
			dateSaida:"15-05-2019",
			dateRetorno:"15-05-2019",
			idiceEstado : 0,
			indiceCidade : 0,
			cidade: '',
            estados: [
                {
					sigla: "SC",
					nome: "Santa Catarina",
					indiceCidade: 0,
					cidades: [
						{nome: "Abdon Batista", distancia: 200},
						{nome: "Abelardo Luz", distancia: 200},
						{nome: "Agrolândia", distancia: 200},
						{nome: "Agronômica", distancia: 200},
						{nome: "Água Doce", distancia: 200},
						{nome: "Águas de Chapecó", distancia: 200},
						{nome: "Águas Frias", distancia: 200},
						{nome: "Águas Mornas", distancia: 200},
						{nome: "Alfredo Wagner", distancia: 200},
						{nome: "Alto Bela Vista", distancia: 200},
						{nome: "Anchieta", distancia: 200},
						{nome: "Angelina", distancia: 200},
						{nome: "Anita Garibaldi", distancia: 200},
						{nome: "Anitápolis", distancia: 200},
						{nome: "Antônio Carlos", distancia: 200},
						{nome: "Apiúna", distancia: 200},
						{nome: "Arabutã", distancia: 200},
						{nome: "Araquari", distancia: 200},
						{nome: "Araranguá", distancia: 200},
						{nome: "Armazém", distancia: 200},
						{nome: "Arroio Trinta", distancia: 200},
						{nome: "Arvoredo", distancia: 200},
						{nome: "Ascurra", distancia: 200},
						{nome: "Atalanta", distancia: 200},
						{nome: "Aurora", distancia: 200},
						{nome: "Balneário Arroio do Silva", distancia: 200},
						{nome: "Balneário Barra do Sul", distancia: 200},
						{nome: "Balneário Camboriú", distancia: 6},
						{nome: "Balneário Gaivota", distancia: 200},
						{nome: "Bandeirante", distancia: 200},
						{nome: "Barra Bonita", distancia: 200},
						{nome: "Barra Velha", distancia: 200},
						{nome: "Bela Vista do Toldo", distancia: 200},
						{nome: "Belmonte", distancia: 200},
						{nome: "Benedito Novo", distancia: 200},
						{nome: "Biguaçu", distancia: 200},
						{nome: "Blumenau", distancia: 200},
						{nome: "Bocaina do Sul", distancia: 200},
						{nome: "Bom Jardim da Serra", distancia: 200},
						{nome: "Bom Jesus", distancia: 200},
						{nome: "Bom Jesus do Oeste", distancia: 200},
						{nome: "Bom Retiro", distancia: 200},
						{nome: "Bombinhas", distancia: 200},
						{nome: "Botuverá", distancia: 200},
						{nome: "Braço do Norte", distancia: 200},
						{nome: "Braço do Trombudo", distancia: 200},
						{nome: "Brunópolis", distancia: 200},
						{nome: "Brusque", distancia: 200},
						{nome: "Caçador", distancia: 200},
						{nome: "Caibi", distancia: 200},
						{nome: "Calmon", distancia: 200},
						{nome: "Camboriú", distancia: 1},
						{nome: "Campo Alegre", distancia: 200},
						{nome: "Campo Belo do Sul", distancia: 200},
						{nome: "Campo Erê", distancia: 200},
						{nome: "Campos Novos", distancia: 200},
						{nome: "Canelinha", distancia: 200},
						{nome: "Canoinhas", distancia: 200},
						{nome: "Capão Alto", distancia: 200},
						{nome: "Capinzal", distancia: 200},
						{nome: "Capivari de Baixo", distancia: 200},
						{nome: "Catanduvas", distancia: 200},
						{nome: "Caxambu do Sul", distancia: 200},
						{nome: "Celso Ramos", distancia: 200},
						{nome: "Cerro Negro", distancia: 200},
						{nome: "Chapadão do Lageado", distancia: 200},
						{nome: "Chapecó", distancia: 200},
						{nome: "Cocal do Sul", distancia: 200},
						{nome: "Concórdia", distancia: 200},
						{nome: "Cordilheira Alta", distancia: 200},
						{nome: "Coronel Freitas", distancia: 200},
						{nome: "Coronel Martins", distancia: 200},
						{nome: "Correia Pinto", distancia: 200},
						{nome: "Corupá", distancia: 200},
						{nome: "Criciúma", distancia: 200},
						{nome: "Cunha Porã", distancia: 200},
						{nome: "Cunhataí", distancia: 200},
						{nome: "Curitibanos", distancia: 200},
						{nome: "Descanso", distancia: 200},
						{nome: "Dionísio Cerqueira", distancia: 200},
						{nome: "Dona Emma", distancia: 200},
						{nome: "Doutor Pedrinho", distancia: 200},
						{nome: "Entre Rios", distancia: 200},
						{nome: "Ermo", distancia: 200},
						{nome: "Erval Velho", distancia: 200},
						{nome: "Faxinal dos Guedes", distancia: 200},
						{nome: "Flor do Sertão", distancia: 200},
						{nome: "Florianópolis", distancia: 200},
						{nome: "Formosa do Sul", distancia: 200},
						{nome: "Forquilhinha", distancia: 200},
						{nome: "Fraiburgo", distancia: 200},
						{nome: "Frei Rogério", distancia: 200},
						{nome: "Galvão", distancia: 200},
						{nome: "Garopaba", distancia: 200},
						{nome: "Garuva", distancia: 200},
						{nome: "Gaspar", distancia: 200},
						{nome: "Governador Celso Ramos", distancia: 200},
						{nome: "Grão Pará", distancia: 200},
						{nome: "Gravatal", distancia: 200},
						{nome: "Guabiruba", distancia: 200},
						{nome: "Guaraciaba", distancia: 200},
						{nome: "Guaramirim", distancia: 200},
						{nome: "Guarujá do Sul", distancia: 200},
						{nome: "Guatambú", distancia: 200},
						{nome: "Herval d'Oeste", distancia: 200},
						{nome: "Ibiam", distancia: 200},
						{nome: "Ibicaré", distancia: 200},
						{nome: "Ibirama", distancia: 200},
						{nome: "Içara", distancia: 200},
						{nome: "Ilhota", distancia: 200},
						{nome: "Imaruí", distancia: 200},
						{nome: "Imbituba", distancia: 200},
						{nome: "Imbuia", distancia: 200},
						{nome: "Indaial", distancia: 200},
						{nome: "Iomerê", distancia: 200},
						{nome: "Ipira", distancia: 200},
						{nome: "Iporã do Oeste", distancia: 200},
						{nome: "Ipuaçu", distancia: 200},
						{nome: "Ipumirim", distancia: 200},
						{nome: "Iraceminha", distancia: 200},
						{nome: "Irani", distancia: 200},
						{nome: "Irati", distancia: 200},
						{nome: "Irineópolis", distancia: 200},
						{nome: "Itá", distancia: 200},
						{nome: "Itaiópolis", distancia: 200},
						{nome: "Itajaí", distancia: 18},
						{nome: "Itapema", distancia: 18},
						{nome: "Itapiranga", distancia: 200},
						{nome: "Itapoá", distancia: 200},
						{nome: "Ituporanga", distancia: 200},
						{nome: "Jaborá", distancia: 200},
						{nome: "Jacinto Machado", distancia: 200},
						{nome: "Jaguaruna", distancia: 200},
						{nome: "Jaraguá do Sul", distancia: 200},
						{nome: "Jardinópolis", distancia: 200},
						{nome: "Joaçaba", distancia: 200},
						{nome: "Joinville", distancia: 200},
						{nome: "José Boiteux", distancia: 200},
						{nome: "Jupiá", distancia: 200},
						{nome: "Lacerdópolis", distancia: 200},
						{nome: "Lages", distancia: 200},
						{nome: "Laguna", distancia: 200},
						{nome: "Lajeado Grande", distancia: 200},
						{nome: "Laurentino", distancia: 200},
						{nome: "Lauro Muller", distancia: 200},
						{nome: "Lebon Régis", distancia: 200},
						{nome: "Leoberto Leal", distancia: 200},
						{nome: "Lindóia do Sul", distancia: 200},
						{nome: "Lontras", distancia: 200},
						{nome: "Luiz Alves", distancia: 200},
						{nome: "Luzerna", distancia: 200},
						{nome: "Macieira", distancia: 200},
						{nome: "Mafra", distancia: 200},
						{nome: "Major Gercino", distancia: 200},
						{nome: "Major Vieira", distancia: 200},
						{nome: "Maracajá", distancia: 200},
						{nome: "Maravilha", distancia: 200},
						{nome: "Marema", distancia: 200},
						{nome: "Massaranduba", distancia: 200},
						{nome: "Matos Costa", distancia: 200},
						{nome: "Meleiro", distancia: 200},
						{nome: "Mirim Doce", distancia: 200},
						{nome: "Modelo", distancia: 200},
						{nome: "Mondaí", distancia: 200},
						{nome: "Monte Carlo", distancia: 200},
						{nome: "Monte Castelo", distancia: 200},
						{nome: "Morro da Fumaça", distancia: 200},
						{nome: "Morro Grande", distancia: 200},
						{nome: "Navegantes", distancia: 200},
						{nome: "Nova Erechim", distancia: 200},
						{nome: "Nova Itaberaba", distancia: 200},
						{nome: "Nova Trento", distancia: 200},
						{nome: "Nova Veneza", distancia: 200},
						{nome: "Novo Horizonte", distancia: 200},
						{nome: "Orleans", distancia: 200},
						{nome: "Otacílio Costa", distancia: 200},
						{nome: "Ouro", distancia: 200},
						{nome: "Ouro Verde", distancia: 200},
						{nome: "Paial", distancia: 200},
						{nome: "Painel", distancia: 200},
						{nome: "Palhoça", distancia: 200},
						{nome: "Palma Sola", distancia: 200},
						{nome: "Palmeira", distancia: 200},
						{nome: "Palmitos", distancia: 200},
						{nome: "Papanduva", distancia: 200},
						{nome: "Paraíso", distancia: 200},
						{nome: "Passo de Torres", distancia: 200},
						{nome: "Passos Maia", distancia: 200},
						{nome: "Paulo Lopes", distancia: 200},
						{nome: "Pedras Grandes", distancia: 200},
						{nome: "Penha", distancia: 200},
						{nome: "Peritiba", distancia: 200},
						{nome: "Petrolândia", distancia: 200},
						{nome: "Piçarras", distancia: 200},
						{nome: "Pinhalzinho", distancia: 200},
						{nome: "Pinheiro Preto", distancia: 200},
						{nome: "Piratuba", distancia: 200},
						{nome: "Planalto Alegre", distancia: 200},
						{nome: "Pomerode", distancia: 200},
						{nome: "Ponte Alta", distancia: 200},
						{nome: "Ponte Alta do Norte", distancia: 200},
						{nome: "Ponte Serrada", distancia: 200},
						{nome: "Porto Belo", distancia: 200},
						{nome: "Porto União", distancia: 200},
						{nome: "Pouso Redondo", distancia: 200},
						{nome: "Praia Grande", distancia: 200},
						{nome: "Presidente Castelo Branco", distancia: 200},
						{nome: "Presidente Getúlio", distancia: 200},
						{nome: "Presidente Nereu", distancia: 200},
						{nome: "Princesa", distancia: 200},
						{nome: "Quilombo", distancia: 200},
						{nome: "Rancho Queimado", distancia: 200},
						{nome: "Rio das Antas", distancia: 200},
						{nome: "Rio do Campo", distancia: 200},
						{nome: "Rio do Oeste", distancia: 200},
						{nome: "Rio do Sul", distancia: 200},
						{nome: "Rio dos Cedros", distancia: 200},
						{nome: "Rio Fortuna", distancia: 200},
						{nome: "Rio Negrinho", distancia: 200},
						{nome: "Rio Rufino", distancia: 200},
						{nome: "Riqueza", distancia: 200},
						{nome: "Rodeio", distancia: 200},
						{nome: "Romelândia", distancia: 200},
						{nome: "Salete", distancia: 200},
						{nome: "Saltinho", distancia: 200},
						{nome: "Salto Veloso", distancia: 200},
						{nome: "Sangão", distancia: 200},
						{nome: "Santa Cecília", distancia: 200},
						{nome: "Santa Helena", distancia: 200},
						{nome: "Santa Rosa de Lima", distancia: 200},
						{nome: "Santa Rosa do Sul", distancia: 200},
						{nome: "Santa Terezinha", distancia: 200},
						{nome: "Santa Terezinha do Progresso", distancia: 200},
						{nome: "Santiago do Sul", distancia: 200},
						{nome: "Santo Amaro da Imperatriz", distancia: 200},
						{nome: "São Bento do Sul", distancia: 200},
						{nome: "São Bernardino", distancia: 200},
						{nome: "São Bonifácio", distancia: 200},
						{nome: "São Carlos", distancia: 200},
						{nome: "São Cristovão do Sul", distancia: 200},
						{nome: "São Domingos", distancia: 200},
						{nome: "São Francisco do Sul", distancia: 200},
						{nome: "São João Batista", distancia: 200},
						{nome: "São João do Itaperiú", distancia: 200},
						{nome: "São João do Oeste", distancia: 200},
						{nome: "São João do Sul", distancia: 200},
						{nome: "São Joaquim", distancia: 200},
						{nome: "São José", distancia: 200},
						{nome: "São José do Cedro", distancia: 200},
						{nome: "São José do Cerrito", distancia: 200},
						{nome: "São Lourenço do Oeste", distancia: 200},
						{nome: "São Ludgero", distancia: 200},
						{nome: "São Martinho", distancia: 200},
						{nome: "São Miguel da Boa Vista", distancia: 200},
						{nome: "São Miguel do Oeste", distancia: 200},
						{nome: "São Pedro de Alcântara", distancia: 200},
						{nome: "Saudades", distancia: 200},
						{nome: "Schroeder", distancia: 200},
						{nome: "Seara", distancia: 200},
						{nome: "Serra Alta", distancia: 200},
						{nome: "Siderópolis", distancia: 200},
						{nome: "Sombrio", distancia: 200},
						{nome: "Sul Brasil", distancia: 200},
						{nome: "Taió", distancia: 200},
						{nome: "Tangará", distancia: 200},
						{nome: "Tigrinhos", distancia: 200},
						{nome: "Tijucas", distancia: 200},
						{nome: "Timbé do Sul", distancia: 200},
						{nome: "Timbó", distancia: 200},
						{nome: "Timbó Grande", distancia: 200},
						{nome: "Três Barras", distancia: 200},
						{nome: "Treviso", distancia: 200},
						{nome: "Treze de Maio", distancia: 200},
						{nome: "Treze Tílias", distancia: 200},
						{nome: "Trombudo Central", distancia: 200},
						{nome: "Tubarão", distancia: 200},
						{nome: "Tunápolis", distancia: 200},
						{nome: "Turvo", distancia: 200},
						{nome: "União do Oeste", distancia: 200},
						{nome: "Urubici", distancia: 200},
						{nome: "Urupema", distancia: 200},
						{nome: "Urussanga", distancia: 200},
						{nome: "Vargeão", distancia: 200},
						{nome: "Vargem", distancia: 200},
						{nome: "Vargem Bonita", distancia: 200},
						{nome: "Vidal Ramos", distancia: 200},
						{nome: "Videira", distancia: 200},
						{nome: "Vitor Meireles", distancia: 200},
						{nome: "Witmarsum", distancia: 200},
						{nome: "Xanxerê", distancia: 200},
						{nome: "Xavantina", distancia: 200},
						{nome: "Xaxim", distancia: 200},
						{nome: "Zortéa", distancia: 200},
					]
				},
				{
					sigla: "DF",
					nome: "Distrito Federal",
					indiceCidade: 0,
					cidades: [
					  	{nome: "Brasília", distancia: 200}
					]
				},
				{
					sigla: "EXT",
					nome: "Exterior",
					indiceCidade: 0,
					cidades: [
					  	{nome: "Exterior", distancia: 2000}
					]
				},
				{
					sigla: "OUTOS",
					nome: "Outros",
					indiceCidade: 0,
					cidades: [
					  	{nome: "Outros", distancia: 2000}
					]
				}
			],

			indiceMinutosSaida:0,
			MinutosSaida:[
				{minutos:'00'},
				{minutos:'01'},
				{minutos:'02'},
				{minutos:'03'},
				{minutos:'04'},
				{minutos:'05'},
				{minutos:'06'},
				{minutos:'07'},
				{minutos:'08'},
				{minutos:'09'},
				{minutos:'10'},
				{minutos:'11'},
				{minutos:'12'},
				{minutos:'13'},
				{minutos:'14'},
				{minutos:'15'},
				{minutos:'16'},
				{minutos:'17'},
				{minutos:'18'},
				{minutos:'19'},
				{minutos:'20'},
				{minutos:'21'},
				{minutos:'22'},
				{minutos:'23'},
				{minutos:'24'},
				{minutos:'25'},
				{minutos:'26'},
				{minutos:'27'},
				{minutos:'28'},
				{minutos:'29'},
				{minutos:'30'},
				{minutos:'31'},
				{minutos:'32'},
				{minutos:'33'},
				{minutos:'34'},
				{minutos:'35'},
				{minutos:'36'},
				{minutos:'37'},
				{minutos:'38'},
				{minutos:'39'},
				{minutos:'40'},
				{minutos:'41'},
				{minutos:'42'},
				{minutos:'43'},
				{minutos:'44'},
				{minutos:'45'},
				{minutos:'46'},
				{minutos:'47'},
				{minutos:'48'},
				{minutos:'49'},
				{minutos:'50'},
				{minutos:'51'},
				{minutos:'52'},
				{minutos:'53'},
				{minutos:'54'},
				{minutos:'55'},
				{minutos:'56'},
				{minutos:'57'},
				{minutos:'58'},
				{minutos:'59'},
				{minutos:'60'},
			],
			indiceHoraSaida: 0,
			HoraSaida:[
				{hora:'00'},
				{hora:'01'},
				{hora:'02'},
				{hora:'03'},
				{hora:'04'},
				{hora:'05'},
				{hora:'06'},
				{hora:'07'},
				{hora:'08'},
				{hora:'09'},
				{hora:'10'},
				{hora:'11'},
				{hora:'12'},
				{hora:'13'},
				{hora:'14'},
				{hora:'15'},
				{hora:'16'},
				{hora:'17'},
				{hora:'18'},
				{hora:'19'},
				{hora:'20'},
				{hora:'21'},
				{hora:'22'},
				{hora:'23'},
				{hora:'24'},
			],
			indiceMinutosRetorno:0,
			MinutosRetorno:[
				{minutos:'00'},
				{minutos:'01'},
				{minutos:'02'},
				{minutos:'03'},
				{minutos:'04'},
				{minutos:'05'},
				{minutos:'06'},
				{minutos:'07'},
				{minutos:'08'},
				{minutos:'09'},
				{minutos:'10'},
				{minutos:'11'},
				{minutos:'12'},
				{minutos:'13'},
				{minutos:'14'},
				{minutos:'15'},
				{minutos:'16'},
				{minutos:'17'},
				{minutos:'18'},
				{minutos:'19'},
				{minutos:'20'},
				{minutos:'21'},
				{minutos:'22'},
				{minutos:'23'},
				{minutos:'24'},
				{minutos:'25'},
				{minutos:'26'},
				{minutos:'27'},
				{minutos:'28'},
				{minutos:'29'},
				{minutos:'30'},
				{minutos:'31'},
				{minutos:'32'},
				{minutos:'33'},
				{minutos:'34'},
				{minutos:'35'},
				{minutos:'36'},
				{minutos:'37'},
				{minutos:'38'},
				{minutos:'39'},
				{minutos:'40'},
				{minutos:'41'},
				{minutos:'42'},
				{minutos:'43'},
				{minutos:'44'},
				{minutos:'45'},
				{minutos:'46'},
				{minutos:'47'},
				{minutos:'48'},
				{minutos:'49'},
				{minutos:'50'},
				{minutos:'51'},
				{minutos:'52'},
				{minutos:'53'},
				{minutos:'54'},
				{minutos:'55'},
				{minutos:'56'},
				{minutos:'57'},
				{minutos:'58'},
				{minutos:'59'},
				{minutos:'60'},
			],
			indiceHoraRetorno: 0,
			HoraRetorno:[
				{hora:'00'},
				{hora:'01'},
				{hora:'02'},
				{hora:'03'},
				{hora:'04'},
				{hora:'05'},
				{hora:'06'},
				{hora:'07'},
				{hora:'08'},
				{hora:'09'},
				{hora:'10'},
				{hora:'11'},
				{hora:'12'},
				{hora:'13'},
				{hora:'14'},
				{hora:'15'},
				{hora:'16'},
				{hora:'17'},
				{hora:'18'},
				{hora:'19'},
				{hora:'20'},
				{hora:'21'},
				{hora:'22'},
				{hora:'23'},
				{hora:'24'},
			],
			valor_ufm: '',    
			horas_consedidas: '',
			valor_total: '',
			msg: ''

		}
		
		this.diaria = this.diaria.bind(this);
    }

    static navigationOptions = {
        title : 'Simular valor diária (Ufm)'
	}
	
	diaria(){
		let state = this.state;
				
		let DSaida = state.dateSaida.split('-');
		let ds = DSaida[0]+'/'+DSaida[1]+'/'+DSaida[2]
		let DRetorno = state.dateRetorno.split('-');
		let dr = DRetorno[0]+'/'+DRetorno[1]+'/'+DRetorno[2];

		let HoraSaida = state.HoraSaida[state.indiceHoraSaida].hora;
		let minutosSaida = state.MinutosSaida[state.indiceMinutosSaida].minutos
		let HoraRetorno = state.HoraRetorno[state.indiceHoraRetorno].hora;
		let minutosRetorno = state.MinutosRetorno[state.indiceMinutosRetorno].minutos

		let estado = state.estados[state.idiceEstado].nome;
		let cidade = state.estados[state.idiceEstado].cidades[state.indiceCidade].nome;
		let distancia = state.estados[state.idiceEstado].cidades[state.indiceCidade].distancia;
		let valor_ufm = state.valor_ufm;
        
		// CODIGO NO APP REACT NATIVE
		let formData = new FormData();
		formData.append("hora_saida", HoraSaida);
		formData.append("data_saida", ds);
		formData.append("hora_retorno", HoraRetorno);
		formData.append("data_retorno", dr);
		formData.append("distancia", distancia);
		formData.append("estado", estado);
		formData.append("valor_ufm", valor_ufm);
		
		fetch('https://simuladordiarias.herokuapp.com/ufm.php', {
			method: 'POST',	
			headers: {
				Accept:'application/json',
				'Content-Type': 'multipart/form-data',
			  },
			body: formData,
		})
		.then((response) => { return response.json();})
		.then((responseJson) => {
			let state = this.state;
			state.horas_consedidas = responseJson.horas_consedidas
			state.valor_total = responseJson.valor_total
			state.msg = responseJson.msg

			this.setState(state);
			
		})
		.catch((error) => {
			console.error(error);
		});

	}

    render() {

		const estados = this.state.estados.map((v, k) => {
			return <Picker.Item key={k} label={v.nome} value={k} />
		});

		const cidades = this.state.estados[this.state.idiceEstado].cidades.map((v, k) => {
			return <Picker.Item key={k} value={k} label={v.nome} />
		})

		let horarioSaida = this.state.HoraSaida.map((v, k) => {
			return <Picker.Item key={k} value={k} label={v.hora} />
		});

		let minutosSaida = this.state.MinutosSaida.map((v, k) => {
			return <Picker.Item key={k} value={k} label={v.minutos} />
		});

		let horarioRetorno = this.state.HoraRetorno.map((v, k) => {
			return <Picker.Item key={k} value={k} label={v.hora} />
		});

		let minutosRetorno = this.state.MinutosRetorno.map((v, k) => {
			return <Picker.Item key={k} value={k} label={v.minutos} />
		});	

        return (
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.main}>			
						<View style={styles.boxInput}>
							<Text style={styles.label}>Estado Destino</Text>
							<Picker selectedValue={this.state.idiceEstado} onValueChange={(itemValue, itemIndex) => this.setState({idiceEstado:itemValue})} style={[styles.picker, styles.valor_ufm]}>
								{estados}
							</Picker>
						</View>						
						{/* <Text>{this.state.estados[this.state.idiceEstado].nome}</Text> */}

						<View style={styles.boxInput}>
							<Text style={styles.label}>Cidade Destino</Text>
							<Picker selectedValue={this.state.indiceCidade} onValueChange={(itemValue,itemIndex) => this.setState({indiceCidade: itemValue})}  style={styles.picker}>
								{cidades}
							</Picker>
						</View>	


						<View style={styles.boxDatas}>
							<Text style={[styles.label, {margin: 10}]}>Dia Saída</Text>
							<DatePicker
								style={{width: 280, marginLeft: 10}}
								date={this.state.dateSaida} //initial date from state
								mode="date" //The enum of date, datetime and time
								placeholder="select date"
								format="DD-MM-YYYY"
								minDate="01-01-2016"
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
									marginLeft: 36
									}
								}}
								onDateChange={(date) => {this.setState({dateSaida: date})}}
							/>			

							<View style={{flex:1, flexDirection:'row'}}>

								<View style={{flex:1, flexDirection:'column', textAlign:'center'}} >
									<Text style={{fontSize: 20, fontWeight: 'bold',	marginTop:20, marginLeft:10}}>Hora</Text>
									<Picker selectedValue={this.state.indiceHoraSaida} onValueChange={(itemValue) => {this.setState({indiceHoraSaida:itemValue})}}>
										{horarioSaida}
									</Picker>
								</View>
								<Text> : </Text>
								<View style={{flex:1, textAlign:'center'}} >
									<Text style={{fontSize: 20, fontWeight: 'bold', marginTop:20, marginLeft:10}}>Minutos</Text>
									<Picker selectedValue={this.state.indiceMinutosSaida} onValueChange={(item) => {this.setState({indiceMinutosSaida : item}) }} >
										{minutosSaida}
									</Picker>
								</View>

							</View>	
							
						</View>
						
						<View style={[styles.boxDatas]}>
							<Text style={[styles.label, {margin: 10}]}>Dia Retorno</Text>
							<DatePicker
								style={{width: 280, marginLeft: 10}}
								date={this.state.dateRetorno} //initial date from state
								mode="date" //The enum of date, datetime and time
								placeholder="select date"
								format="DD-MM-YYYY"
								minDate="01-01-2016"
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
									marginLeft: 36
									}
								}}
								onDateChange={(date) => {this.setState({dateRetorno: date})}}
							/>


							
							<View style={{flex:1, flexDirection:'row'}}>

								<View style={{flex:1, flexDirection:'column'}} >
									<Text style={{fontSize: 20, fontWeight: 'bold',	marginTop:20, marginLeft:10}}>Hora</Text>
									<Picker selectedValue={this.state.indiceHoraRetorno} onValueChange={(itemValue) => {this.setState({indiceHoraRetorno:itemValue})}}>
										{horarioRetorno}
									</Picker>
								</View>
								
								<View style={{flex:1, textAlign:'center'}} >
									<Text style={{fontSize: 20, fontWeight: 'bold', marginTop:20, marginLeft:10}}>Minutos</Text>
									<Picker selectedValue={this.state.indiceMinutosRetorno} onValueChange={(item) => {this.setState({indiceMinutosRetorno : item}) }} >
										{minutosRetorno}
									</Picker>
								</View>
							</View>	
						</View>	


						<View style={[styles.boxInput, {alignSelf: 'stretch'}]}>
                            <Text style={styles.label}>Valor atual da UFM</Text>
                            <TextInput style={styles.valor_ufm} placeholder='Valor atual da UFM' onChangeText={(item) => {
                                let state = this.state;
                                state.valor_ufm = item;
                                this.setState(state);
                            }} />
                        </View>
						{/* <Text>{this.state.estados[this.state.idiceEstado].cidades[this.state.indiceCidade].nome}</Text> */}
					
						{/* <Text style={{display: 'none'}}>{this.state.estados[this.state.idiceEstado].nome}</Text>
						<Text>{this.state.estados[this.state.idiceEstado].cidades[this.state.indiceCidade].nome}</Text>
						<Text>{this.state.HoraSaida[this.state.indiceHoraSaida].hora} : {this.state.MinutosSaida[this.state.indiceMinutosRetorno].minutos}</Text>
						<Text>{this.state.HoraRetorno[this.state.indiceHoraRetorno].hora} : {this.state.MinutosRetorno[this.state.indiceMinutosRetorno].minutos}</Text>
						<Text>Data Saida: {this.state.dateSaida}</Text>
						<Text>Data Retorno: {this.state.dateRetorno}</Text> */}
						{/* <Text>{this.state.cidade}</Text>
						<Text>{this.state.cidade}</Text> */}

                        <Text>{this.state.textinp}</Text>
						
						<View style={[styles.BoxResponse, (this.state.msg != '')? {backgroundColor: '#1E90FF'} :{display: 'none'} ]}>
							<Text style={styles.TitleResponse}>{this.state.msg}</Text>
							<Text style={[styles.TextResponse, {fontSize: 30}]}>{(this.state.valor_total != '')? 'R$ ' + this.state.valor_total: ''}</Text>
							<Text style={styles.TextResponse}>{(this.state.horas_consedidas != '')? 'Total de Ufm´s: ' + this.state.horas_consedidas: ''}</Text>			
						</View>

						<Button style={styles.btn} title='Simular Valor' onPress={this.diaria}></Button>
					</View>
				</View>
			</ScrollView>
        );
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#CCC'
	},
	main:{
		flex: 1,
		backgroundColor: '#FFF',
		margin: 10,
		borderRadius: 2
	},
	boxInput:{
		margin: 15,
	},
	boxDatas:{
		margin: 10,
		flex:1,
		flexDirection: 'row'
	},
	label:{
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
		width:310,
	},
	BoxResponse:{
		// backgroundColor: '#FFF',
		margin:10,
		marginLeft: 15,
		width:310,
		borderRadius: 5
	},
	TitleResponse: {
		marginTop: 10,
		margin: 5,
		fontSize: 18,
		fontWeight: 'bold',
		color: '#FFFAFA',
		textAlign: "center"
	},
	TextResponse: {
		marginLeft: 10,
		marginBottom: 10,
		fontSize: 15,
		color: '#FFFAFA',
		fontWeight: 'bold',
		textAlign: "center"
    },
    valor_ufm: {
        borderWidth: 1,
        borderColor: '#000',
        height: 40,
        padding: 10
    },  
	btn: {
		backgroundColor: '#7CFC00',
	}
})


