import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGkE5T-OWImM5sZJWIbqOxv2KKFuieyc8",
    authDomain: "app-react-ef0e1.firebaseapp.com",
    projectId: "app-react-ef0e1",
    storageBucket: "app-react-ef0e1.appspot.com",
    messagingSenderId: "1014819336494",
    appId: "1:1014819336494:web:70a044ac85b204284b8abf"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);