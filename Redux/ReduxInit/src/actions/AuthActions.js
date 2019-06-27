import firebase from '../Conexao';

export const editEmail = (email) => {
    return {
        type: "editEmail",
        payload: {
            email: email
        }
    }
}

export const editPass = (senha) => {
    return {
        type: 'editPass',
        payload: {
            senha : senha
        }
    }
}

export const cadastroUser = (email, senha) => {
   
    return (dispatch) => {
        
        // firebase.auth().createUserWithEmailAndPassword(email, senha)
        // .then((user) => {
        //     dispatch({
        //         type: 'CadastroSuccesso'
        //     });
        // })
        // .catch((erro) => {
        //     dispatch({
        //         type: 'CadastroFail',
        //         payload: {
        //             code: erro.code
        //         }
        //     })
        //     alert(erro.code) 
        
        // });

        let formData = new FormData();
        formData.append("email", email);
        formData.append("senha", senha);
        
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
            alert(responseJson.msg)
            dispatch({
                type: 'CadastroSucess'
            });            
        })
        .catch((erro) => {
            dispatch({
                type: 'Cadastro Falhou',
                payload: {
                    code: erro.code
                }
            })
        });

    } 
    
}