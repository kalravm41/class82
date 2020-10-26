import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAR5kgOjSXcHZinjDClBN34rEPT0FLfH4w",
  authDomain: "project34-3ea01.firebaseapp.com",
  databaseURL: "https://project34-3ea01.firebaseio.com",
  projectId: "project34-3ea01",
  storageBucket: "project34-3ea01.appspot.com",
  messagingSenderId: "1094664179155",
  appId: "1:1094664179155:web:c22f4b6231ff51c89cb326"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
