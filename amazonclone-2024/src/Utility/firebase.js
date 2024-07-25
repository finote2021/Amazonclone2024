// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPMgYxoUzWgO0NuxLKRsIq9wnnY0tOGoY",
  authDomain: "clone-a8363.firebaseapp.com",
  projectId: "clone-a8363",
  storageBucket: "clone-a8363.appspot.com",
  messagingSenderId: "354515152100",
  appId: "1:354515152100:web:3ef13c22ec858a7eda10f1",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();
