import firebase from '../FirebaseConnection';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

export const checkLogin = (uid) => {

	return (dispatch) => {

		if(uid != '') {
			dispatch({
				type:'changeUid',
				payload:{
					uid:uid
				}
			});
		} else {
			dispatch({
				type:'changeStatus',
				payload:{
					status:2
				}
			});
		}

	}

};

export const cadastrarUser = (nome, email, pass) => {

	return (dispatch) => {	

		let formData = new FormData();
        formData.append("nome", nome);
		formData.append("email", email);
		formData.append("senha", pass);
        
        fetch('https://wspersonalapp.herokuapp.com/api/createUser', {
            method: 'POST', 
            headers: {
                Accept:'application/json',
                'Content-Type': 'multipart/form-data',
         	 },
            body: formData,
        })
        .then((response) => { return response.json();})
        .then((responseJson) => {
			if(responseJson.msg == 'Cadastro concluido!') {
				dispatch({
					type: 'changeUid',
					payload: {
						token: responseJson.token
					}
				})
			}
			
        })
        .catch((error) => {
			alert('Algo errado aconteceu');
		});
	}
	
}

export const loginUser = (email, pass) => {
	return(dispatch) => {
		let formData = new FormData();
		formData.append("email", email);
		formData.append("senha", pass);
        
        fetch('https://wspersonalapp.herokuapp.com/api/login', {
            method: 'POST', 
            headers: {
                Accept:'application/json',
                'Content-Type': 'multipart/form-data',
         	 },
            body: formData,
        })
        .then((response) => { return response.json();})
        .then((responseJson) => {
			if(responseJson.msg == 'Logged') {
				dispatch({
					type: 'changeUid',
					payload: {
						token: responseJson.userData[0].token,
						uid: responseJson.userData[0].id
					}
				})
			}
			
        })
        .catch((error) => {
			alert('Algo errado aconteceu');
		});
	}
}

export const SignOut = () => {
	return (dispatch) => {

		AsyncStorage.setItem('token', '')
		AsyncStorage.setItem('email', '')
		AsyncStorage.setItem('uid', '')

		AsyncStorage.getItem('uid').then((value) => {
            if(value == null) {
				dispatch({
					type:'changeStatus',
					payload:{
						status:2
					}
				});
            }
        })

		
	}
	
}

export const changeEmail = (email) => {
	return {
		type: 'changeEmail',
		payload: {
			email: email
		}
	}
}

export const changeSenha = (password) => {
	return {
		type: 'changeSenha',
		payload: {
			password: password
		}
	}
}

export const changeNome = (nome) => {
	return {
		type: 'changeNome',
		payload: {
			nome: nome
		}
	}
}