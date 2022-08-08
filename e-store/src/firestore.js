// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDWEW9-xjYHSEo4_kOrTkwn21Ebdq4Qqos",
    authDomain: "dalibor-nology-firestore.firebaseapp.com",
    projectId: "dalibor-nology-firestore",
    storageBucket: "dalibor-nology-firestore.appspot.com",
    messagingSenderId: "722362275671",
    appId: "1:722362275671:web:8284280cfb1ba70c981012",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const firestore = app.firestore();

//import { initializeApp } from "firebase/app";