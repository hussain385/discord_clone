// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8P3WuFxt-uleP4VH0dGM93sh8mGBlR74",
  authDomain: "discord-clone-1221c.firebaseapp.com",
  projectId: "discord-clone-1221c",
  storageBucket: "discord-clone-1221c.appspot.com",
  messagingSenderId: "448487322468",
  appId: "1:448487322468:web:7f5b99da10e158b364c071",
  measurementId: "G-G293FDJ8TT",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const projectStorage = firebase.storage();

export { auth, provider, db, projectStorage };
