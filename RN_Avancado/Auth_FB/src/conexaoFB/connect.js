import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCU6d9V9xkupKEgzkVjuiwWe8Rt23Oulhg",
    authDomain: "primeiro-projeto-6f199.firebaseapp.com",
    databaseURL: "https://primeiro-projeto-6f199.firebaseio.com",
    projectId: "primeiro-projeto-6f199",
    storageBucket: "primeiro-projeto-6f199.appspot.com",
    messagingSenderId: "124839890193",
    appId: "1:124839890193:web:85b493c67db99525"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;