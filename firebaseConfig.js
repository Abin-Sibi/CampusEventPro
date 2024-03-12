// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import  'firebase/compat/firestore'
import  'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2uZPSJ5uAFUroRlZvfPJIauz3avbxK5c",
  authDomain: "campuseventpro.firebaseapp.com",
  projectId: "campuseventpro",
  storageBucket: "campuseventpro.appspot.com",
  messagingSenderId: "45285742487",
  appId: "1:45285742487:web:07b13ee1e944fc3349d6d2",
  measurementId: "G-9YZ6XGX61R"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export {firebase}