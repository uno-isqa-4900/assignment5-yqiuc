import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCZe6RtrQMfixxY2p2RaiaUcqnk7TYKAfc",
  authDomain: "quitter2-141b8.firebaseapp.com",
  projectId: "quitter2-141b8",
  storageBucket: "quitter2-141b8.appspot.com",
  messagingSenderId: "54539909184",
  appId: "1:54539909184:web:072115a46f54e3e48b47a5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// access firebase database with db variable
const db = firebase.firestore()

export default db