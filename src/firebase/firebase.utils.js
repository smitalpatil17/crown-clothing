import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyCQUsEWsGPX723sPc64V923NrIkKqNqubc",
  authDomain: "crown-db-a0381.firebaseapp.com",
  projectId: "crown-db-a0381",
  storageBucket: "crown-db-a0381.appspot.com",
  messagingSenderId: "303784415468",
  appId: "1:303784415468:web:e6faccb334d377e7b7d5c9",
  measurementId: "G-Z65Q8WKWZE"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;