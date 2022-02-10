import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAoFI1Lbk5TY1rFbxNhEbSsPC4ULQZN0do",
    authDomain: "react-apps-ace13.firebaseapp.com",
    projectId: "react-apps-ace13",
    storageBucket: "react-apps-ace13.appspot.com",
    messagingSenderId: "936111699581",
    appId: "1:936111699581:web:ab229e77efee611432e314"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
