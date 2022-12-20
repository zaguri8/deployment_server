
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyD6sFku9-Zf9R-GDiCNUU9oZYKDQj0230A",
    authDomain: "cossci.firebaseapp.com",
    databaseURL: "https://cossci-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cossci",
    storageBucket: "cossci.appspot.com",
    messagingSenderId: "327221198920",
    appId: "1:327221198920:web:b6e43768a3cbfdf256187d",
    measurementId: "G-GYC70LKVMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const auth = getAuth(app);
