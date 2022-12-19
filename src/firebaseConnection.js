import firebase from 'firebase/app'
import 'firebase/firebase-database'

let firebaseConfig = {
    apiKey: "AIzaSyDUyp7OcPnMcwwQejUCRkqGL4hdKd3wq2k",
    authDomain: "mobapp-365715.firebaseapp.com",
    databaseURL: "https://mobapp-365715-default-rtdb.firebaseio.com",
    projectId: "mobapp-365715",
    storageBucket: "mobapp-365715.appspot.com",
    messagingSenderId: "39048818358",
    appId: "1:39048818358:web:7cb1e775882d3481458017",
    measurementId: "G-GD3WTYYXF7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

