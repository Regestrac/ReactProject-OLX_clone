import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYDjNyaTq2qXkqx-7k_C6dwB2CgMgyogM",
    authDomain: "olxclone-c98d0.firebaseapp.com",
    projectId: "olxclone-c98d0",
    storageBucket: "olxclone-c98d0.appspot.com",
    messagingSenderId: "1005261163706",
    appId: "1:1005261163706:web:c0ba0cd90edc10471e0683",
    measurementId: "G-G7Z83R75RD"
  };
export default firebase.initializeApp(firebaseConfig);
