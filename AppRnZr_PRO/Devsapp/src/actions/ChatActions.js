export const teste = (oaram) => {

    return(dispatch) => {
        dispatch({
            type: 'teste',
            payload: {
                teste: 'testede Action'
            }
        })
    }
   
}