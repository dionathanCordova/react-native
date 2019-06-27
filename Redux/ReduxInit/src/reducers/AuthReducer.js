const initialState = {
	email:'teste@hotmail.com',
	senha:'test'
};

const AuthReducer = (state = [], action) => {
	if(state.length == 0) {
		return initialState;
	}

	if(action.type == 'editEmail') {
		return { ...state, email: action.payload.email};
	}

	if(action.type == 'editPass') {
		return { ...state, senha: action.payload.senha}
	}

	if(action.type == 'CadastroSucess') {
		return state;	
	}

	if(action.type == 'CadastroFail') {
		alert('erro: ' + action.payload.code);
		return state;			
	}

	return state;
};

export default AuthReducer;