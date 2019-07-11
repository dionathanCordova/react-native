const chat = {
    listaConversas = [],
    teste: ''
}

const ChatReducer = (state = chat, action) => {
    if(action.type == 'teste') {
        return { ...state, teste: action.payload.teste}
    }
}