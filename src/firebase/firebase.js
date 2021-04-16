import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBjBOFj-PwTYwjElq_5BDG63WrxRLKa47I",
  authDomain: "has-health.firebaseapp.com",
  projectId: "has-health",
  storageBucket: "has-health.appspot.com",
  messagingSenderId: "372267586811",
  appId: "1:372267586811:web:8d25b6f6911fd34236cc5e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
