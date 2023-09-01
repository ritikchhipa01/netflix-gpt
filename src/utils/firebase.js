// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEWj9ZWqCGelB39GMWVekJTuDJm3Jht18",
  authDomain: "netflixgpt-ab5ec.firebaseapp.com",
  projectId: "netflixgpt-ab5ec",
  storageBucket: "netflixgpt-ab5ec.appspot.com",
  messagingSenderId: "506408867586",
  appId: "1:506408867586:web:6793e7fb08bc8beb06141b",
  measurementId: "G-5GDXNMH010"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();