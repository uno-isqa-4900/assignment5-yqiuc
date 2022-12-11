import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCUXRkGMVfSHctC8tTMa3eOYpjXW2vl8Hk",
  authDomain: "quitter-25b07.firebaseapp.com",
  projectId: "quitter-25b07",
  storageBucket: "quitter-25b07.appspot.com",
  messagingSenderId: "309345965434",
  appId: "1:309345965434:web:d6b38443fa8436a81072c3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db