import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAoFI1Lbk5TY1rFbxNhEbSsPC4ULQZN0do",
    authDomain: "react-apps-ace13.firebaseapp.com",
    projectId: "react-apps-ace13",
    storageBucket: "react-apps-ace13.appspot.com",
    messagingSenderId: "936111699581",
    appId: "1:936111699581:web:ab229e77efee611432e314"
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase,
    getAuth,
    signInWithPopup
}
