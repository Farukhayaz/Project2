// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"

// const firebaseConfig = {
//     apiKey: "AIzaSyCTpn91Ro9oVLu8PlsBXkP2gcZEnbxvmHE",
//     authDomain: "form-a32ed.firebaseapp.com",
//     databaseURL: "https://form-a32ed-default-rtdb.firebaseio.com",
//     projectId: "form-a32ed",
//     storageBucket: "form-a32ed.appspot.com",
//     messagingSenderId: "1092203340313",
//     appId: "1:1092203340313:web:ad591d0f8dd9e21f340088",
//     measurementId: "G-LCD4EFXBRH"
// };

// const app = initializeApp(firebaseConfig);
// // export const auth = getAuth(app);
// export default app
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app"
// import "firebase/compat/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCYYgwtBhXBvRTPGc8i8GpqScYYCEte6Ys",
//     authDomain: "last-3b395.firebaseapp.com",
//     databaseURL: "https://last-3b395-default-rtdb.firebaseio.com",
//     projectId: "last-3b395",
//     storageBucket: "last-3b395.appspot.com",
//     messagingSenderId: "479262466021",
//     appId: "1:479262466021:web:2cd50032e15feef041590c"
// };

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// export default app


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
// import firebase from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYYgwtBhXBvRTPGc8i8GpqScYYCEte6Ys",
    authDomain: "last-3b395.firebaseapp.com",
    databaseURL: "https://last-3b395-default-rtdb.firebaseio.com",
    projectId: "last-3b395",
    storageBucket: "last-3b395.appspot.com",
    messagingSenderId: "479262466021",
    appId: "1:479262466021:web:2cd50032e15feef041590c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app