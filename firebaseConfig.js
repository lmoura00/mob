import { initializeApp } from 'firebase/app';
import { getAuth} from "firebase/auth";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
import {getDatabase} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDUyp7OcPnMcwwQejUCRkqGL4hdKd3wq2k",
  authDomain: "mobapp-365715.firebaseapp.com",
  databaseURL: "https://mobapp-365715-default-rtdb.firebaseio.com",
  projectId: "mobapp-365715",
  storageBucket: "mobapp-365715.appspot.com",
  messagingSenderId: "39048818358",
  appId: "1:39048818358:web:7cb1e775882d3481458017",
  measurementId: "G-GD3WTYYXF7"
};


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db =  getDatabase(app)

  export {app, auth, db}
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

