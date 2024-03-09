import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAHueX0qzmZoLUvmuAl8-cLR2Mlh6bzduo",
  authDomain: "sample-9302a.firebaseapp.com",
  projectId: "sample-9302a",
  storageBucket: "sample-9302a.appspot.com",
  messagingSenderId: "1017206782204",
  appId: "1:1017206782204:web:cd241431a85e9077983f79",
  measurementId: "G-P8R80D78M5"
  };

  initializeApp(firebaseConfig);

  const db = getFirestore();


  export {db}