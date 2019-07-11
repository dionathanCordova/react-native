import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDw1kxH-fHkHGd5spTK3WeEdgSTGH6oQqI",
    authDomain: "devsapp-ac898.firebaseapp.com",
    databaseURL: "https://devsapp-ac898.firebaseio.com",
    projectId: "devsapp-ac898",
    storageBucket: "",
    messagingSenderId: "863008113578",
    appId: "1:863008113578:web:900a802f232300a9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;