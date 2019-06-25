import firebase from './Conexao';

export default class Model {


    teste() {
        alert('t3ete');
    }

    logout() {
        firebase.auth().signOut();

        alert('t3ete');
    }

    login(email, senha) {
        firebase.auth().signInWithEmailAndPassword(
            email,
            senha
        ).catch((error) => {
            alert(error.code)
        })
    }

    addAuthListener(callback) {
        return firebase.auth().onAuthStateChanged(callback);
    }

    getUser(callback) {
        if(firebase.auth().currentUser) {
            firebase.database().ref('usuarios')
            .child(firebase.auth().currentUser.uid)
            .once('value')
            .then(callback);
        }
    }
}