import firebase from "firebase";

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "todolist-fe81e.firebaseapp.com",
    databaseURL: "https://todolist-fe81e.firebaseio.com",
    projectId: "todolist-fe81e",
    storageBucket: "todolist-fe81e.appspot.com",
    messagingSenderId: "437126181141",
    appId: "1:437126181141:web:105cf67c5f7267ebf9391c",
    measurementId: "G-TF44NWJ0F7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;