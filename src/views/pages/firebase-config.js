// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"
// const firebaseConfig = {
//   apiKey: "AIzaSyCTpn91Ro9oVLu8PlsBXkP2gcZEnbxvmHE",
//   authDomain: "form-a32ed.firebaseapp.com",
//   databaseURL: "https://form-a32ed-default-rtdb.firebaseio.com",
//   projectId: "form-a32ed",
//   storageBucket: "form-a32ed.appspot.com",
//   messagingSenderId: "1092203340313",
//   appId: "1:1092203340313:web:ad591d0f8dd9e21f340088",
//   measurementId: "G-LCD4EFXBRH"
// };
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/firestore"


// import 'firebase/compat/firestore';

import { initializeFirestore } from 'firebase/firestore';
const firebaseConfig = {

  apiKey: "AIzaSyCYYgwtBhXBvRTPGc8i8GpqScYYCEte6Ys",
  authDomain: "last-3b395.firebaseapp.com",
  projectId: "last-3b395",
  storageBucket: "last-3b395.appspot.com",
  messagingSenderId: "479262466021",
  appId: "1:479262466021:web:2cd50032e15feef041590c"
};

// Initialize Firebase
let app;

// if (firebase.apps.length === 0) {
app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
// const db = firebase.firestore()

// firebase.firestore().settings({ experimentalForceLongPolling: true });

// const firestore = firebase.firestore();

export { auth };