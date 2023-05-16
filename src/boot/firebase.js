import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyChla7fPyadpmt_kkRcIouRWQPdGzQygoE",
  authDomain: "quitter-54ad2.firebaseapp.com",
  projectId: "quitter-54ad2",
  storageBucket: "quitter-54ad2.appspot.com",
  messagingSenderId: "40822041648",
  appId: "1:40822041648:web:245ccb2e77acff28e991f5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db
