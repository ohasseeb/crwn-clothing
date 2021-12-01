import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {

    apiKey: "AIzaSyBA5vUofG8UGkYtanSgjLuZS3kWfymKPvo",
  
    authDomain: "crwn-db-46d86.firebaseapp.com",
  
    projectId: "crwn-db-46d86",
  
    storageBucket: "crwn-db-46d86.appspot.com",
  
    messagingSenderId: "187258272587",
  
    appId: "1:187258272587:web:d21f60feabffb20f8446ce",
  
    measurementId: "G-JDR6VJZ79N"
  
  };
  

  firebase.initializeApp(config);


  // Look at Documentation for this
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  // gives access to a new google auth provder class from that library

  provider.setCustomParameters({prompt: 'select_account'})

  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;