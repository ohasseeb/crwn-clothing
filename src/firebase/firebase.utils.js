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
  
  export const createUserProfileDocument = async(userAuth, additionalData) => { 
    if(!userAuth) return; // if user auth doesnt exist get out of the function

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    console.log(snapShot);
    //making sure users don't recreate
    if(!snapShot.exists){
      const {displayName, email} = userAuth; 
      const createdAt = new Date(); // tells us the current date 

      try{

        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error) {

        console.log('error creating user!:', error.message);

      }

    }// end if 

    

      return userRef;

   }// end const

  firebase.initializeApp(config);


  // Look at Documentation for this
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  // gives access to a new google auth provder class from that library

  provider.setCustomParameters({prompt: 'select_account'})

  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;