const initialState = {
	nome: '',
	email:'',
	password:'',
	token: '',
	uid: '',
	status:0
};

const AuthReducer = (state = initialState, action) => {

	if(action.type == 'changeStatus') {
		return { ...state, status:action.payload.status};
	}

	if(action.type == 'changeEmail') {
		return { ...state, email: action.payload.email}
	}

	if(action.type == 'changeSenha') {
		return { ...state, password: action.payload.password}
	}

	if(action.type == 'changeNome') {
		return { ...state, nome: action.payload.nome}
	}

	if(action.type == 'changeUid') {
		return { ...state, status: 1, token: action.payload.token, uid: action.payload.uid}
	}

	return state;

};

export default AuthReducer;