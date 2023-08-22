// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCr_VMMl9Z5JcRWlnsRo4h-82YOS2Qf3Oo",
    authDomain: "react-netflix-clone-32c74.firebaseapp.com",
    projectId: "react-netflix-clone-32c74",
    storageBucket: "react-netflix-clone-32c74.appspot.com",
    messagingSenderId: "6372389743",
    appId: "1:6372389743:web:2e16e4e6bcd1d758146e9a",
    measurementId: "G-LX0W3N51Q2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);