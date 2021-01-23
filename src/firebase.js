import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB1HteQtVNkXIpO_40fD9sFyoLIEvHRSIg",
    authDomain: "quotes-1604023917950.firebaseapp.com",
    databaseURL: "https://quotes-1604023917950.firebaseio.com",
    projectId: "quotes-1604023917950",
    storageBucket: "quotes-1604023917950.appspot.com",
    messagingSenderId: "306265748193",
    appId: "1:306265748193:web:36738c486f56135e303da0",
    measurementId: "G-XXQL01N8E0"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();