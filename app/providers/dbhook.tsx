
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import {initializeApp} from 'firebase/app'




// generate env environment variables for firebase
export const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

    



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
export const auth = getAuth(app);
