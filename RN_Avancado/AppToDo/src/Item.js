import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Button} from 'react-native';

export default class Item extends Component{
    
    constructor(props) {
        super(props)
        this.state = {done: (this.props.data.done == '1') ? styles.done : styles.undone};
        
        this.marcar = this.marcar.bind(this);
        this.delete = this.delete.bind(this);
    }

    marcar() {
        let state = this.state;

        let done  = 'sim';

        if(this.state.done == styles.undone) {
            state.done = styles.done;
            done= 'sim';
        }else{
            state.done = styles.undone;
            done= 'nao';
        }

        fetch(this.props.url+'/'+this.props.data.id, {
			method: 'PUT',
			headers: 
			{
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(
			{
				done: done 
			})
        })
        .then((response) => response.json()).then((responseJsonFromServer) => {})
        .catch((error) => {
			alert('Erro')
		});
    }

    delete() {

        fetch(this.props.url+'/'+this.props.data.id, {
			method: 'DELETE',
			headers: 
			{
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
        })
        .then((response) => response.json()).then((responseJsonFromServer) => {
            alert("Excluído");
            this.props.LoadFunction();
        })
        .catch((error) => {
			alert('Erro')
		});
    }
    
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.marcar} style={[styles.marcarArea, this.state.done]}>
                    <View>

                    </View>
                </TouchableOpacity>             
                <Text>{this.props.data.item}</Text>   
                <Button onPress={this.delete} title='X' style={styles.btnDelete}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
	container: {
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#CCCCCC',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    marcarArea:{
        width: 40,
        height: 40,        
        marginLeft: 10
    },
    undone: {
        backgroundColor: '#CCCCCC',
        marginLeft: 10
    },
    done: {
        backgroundColor: '#00FF00',
        marginLeft: 10
    },
    btnDelete:{
        fontSize: 35,
        color: 'blue',
        width: 40,
        height: 40,
        marginLeft: 20
    }
});