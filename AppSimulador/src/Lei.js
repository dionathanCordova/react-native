import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, Image, TouchableOpacity} from 'react-native';

export default class Lei extends Component{

    constructor(props) {
        super(props)

        this.state = {
            title : 'LEI Nº 1142/95',
            sub_title: 'DISPÕE SOBRE A CONCESSÃO DE DIÁRIAS E DÁ OUTRAS PROVIDÊNCIAS',
            dados: [
                {key:'1',  txt: ''},
                {key:'2',  txt: 'AINOR FRANCISCO LOTÉRIO, Prefeito de Camboriú, Estado de Santa Catarina, no uso de suas atribuições legais, FAZ SABER que a Câmara de Vereadores aprovou e ele sanciona a seguinte Lei: '},
                {key:'3',  txt: ''},
                {key:'4',  style: 'blue', txt: 'Art. 1º Fica concedida ajuda de custos, sob a forma de diária, aos servidores públicos do Poder Executivo e Legislativo que se deslocam temporariamente a serviço da municipalidade. (Redação dada pela Lei nº 2796/2015)'},
                {key:'5',  txt: ''},
                {key:'6',  style: 'blue', txt: 'Art. 2º As diárias são concedidas quantitativamente por período de 06 (seis) e 12 (doze) horas, requerida com antecedência de 24h (vinte quatro horas) e creditada nominalmente pelo Município ao servidor responsável, de acordo com o grau de deslocamento. (Redação dada pela Lei nº 2796/2015)'},
                {key:'7',  txt: ''},
                {key:'8',  txt: 'Parágrafo Primeiro: Para deslocamento ao interior do Estado de Santa Catarina: '},
                {key:'9',  txt: 'I - R$ 80,00 por período de 24 horas; '},
                {key:'10',  txt: 'II - R$ 40,00 por período de 12 (doze) horas. '},
                {key:'11',  txt: 'III - R$ 20,00 (vinte reais) por período de 06 (seis) horas. (Redação acrescida pela Lei nº 2796/2015) '},
                {key:'12',  txt: ''},
                {key:'13',  txt: 'Parágrafo Segundo: Para deslocamento a outros Estados:'},
                {key:'14',  txt: 'I - R$ 100,00 por período de 24 horas;'},
                {key:'15',  txt: 'II - 50,00 por período de 12 horas.'},
                {key:'16',  txt: ''},
                {key:'17',  style: 'blue', txt: 'Art. 3º Fica concedida ajuda de custos, sob forma de diária, aos agentes políticos, destinados aos pagamentos de gastos decorrentes do exercício do cargo, para tratarem de interesses do Município fora de seu território, nos seguintes valores:'},
                {key:'18',  txt: ''},
                {key:'19',  txt: 'I - 06 (seis) UFM, por período de 12h (doze horas), em municípios com até 100km (cem quilômetros) de distância;'},
                {key:'20',  txt: 'II - 09 (nove) UFM, por período de 12h (doze horas), em municípios com mais de 100km (cem quilômetros) de distância;'},
                {key:'21',  txt: 'III - 17 (dezessete) UFM, por período de 24h (vinte e quatro horas);'},
                {key:'22',  txt: 'IV - 25 (vinte e cinco) UFM, por período de 24h (vinte e quatro horas), em deslocamento ao Distrito Federal-DF;'},
                {key:'23',  txt: 'V - $ 400 (quatrocentos dólares), por período de 24h (vinte e quatro horas), em deslocamento para o exterior do país. (Redação dada pela Lei nº 2573/2013) '},
                {key:'24',  txt: ''},
                {key:'25',  style: 'blue', txt: 'Art. 4º A concedida de diárias será efetivada após a apresentação do respectivo roteiro de viagem, nos moldes do anexo I da presente Lei.'},
                {key:'26',  txt: ''},
                {key:'27',  style: 'blue', txt: 'Art. 5º Não será permitido o pagamento de diárias a servidores, quando o deslocamento compreender uma distância inferior a 50 quilômetros da sede do Município, exceto para realização de curso com duração mínima de 08 (oito) horas.'},
                {key:'28',  txt: ''},
                {key:'29',  style: 'blue', txt: 'Art. 6º Esta Lei entrará em vigor na data de sua publicação e revogam-se as disposições em contrário'},
                {key:'30',  txt: ''},
                {key:'31',  txt: 'PREFEITURA MUNICIPAL DE CAMBORIÚ, em 15 de maio de 1995. '},
                {key:'32',  txt: ''},
                {key:'33',  txt: 'AINOR FRANCISCO LOTÉRIO Prefeito Municipal '},
                {key:'34',  txt: ''},
                {key:'35',  style: '#000', fontWeight : 'bold', marginBottom: 30, txt: 'Esse conteúdo não substitui o publicado no Diário Oficial do Município. Data de Inserção no Sistema LeisMunicipais: 23/04/2015'},
                {key:'36',  txt: ''},
                {key:'38',  txt: ''},
                {key:'39',  txt: ''},
                {key:'40',  txt: ''},
            ]
        }
    }

    static navigationOptions = {
        title : 'LEI Nº 1142/95'
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.conteudo}>
                    <Text style={styles.title}>{this.state.title}</Text>
                    <Text style={styles.sub_title}>{this.state.sub_title}</Text>
                    <Text></Text>
                    <FlatList 
                        data={this.state.dados}
                        renderItem={({item}) => <Conteudo data={item}/>}
                        keyExtractor={(item, index) => item.key}
                    />
                </View> 
            </View>
        );
    }
}

class Conteudo extends Component {

    render() {
        return(
            <View>                
                <Text style={{color: this.props.data.style, fontWeight: this.props.data.fontWeight, marginBottom: this.props.data.marginBottom}}>{this.props.data.txt}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CCCCCC'
    },
    conteudo: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    sub_title: {
        fontSize: 15
    },
})