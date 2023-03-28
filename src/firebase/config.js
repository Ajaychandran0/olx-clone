import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJ6HC8DDgZIko2tEL-ERZluzYJLcDF5qU",
    authDomain: "olx-clone-88941.firebaseapp.com",
    projectId: "olx-clone-88941",
    storageBucket: "olx-clone-88941.appspot.com",
    messagingSenderId: "723897706429",
    appId: "1:723897706429:web:228556efe2433306b494d4",
    measurementId: "G-D0WDFB3SHY"
};

export default firebase.initializeApp(firebaseConfig)