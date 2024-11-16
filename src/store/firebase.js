// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwdK3rZwvxIAIGSoZZGL76aUx8tOYsG9c",
  authDomain: "pawtful.firebaseapp.com",
  projectId: "pawtful",
  storageBucket: "pawtful.firebasestorage.app",
  messagingSenderId: "349007386540",
  appId: "1:349007386540:web:25a94de8527b556b590c09",
  measurementId: "G-BM0XGHKQMF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const authFirebase = getAuth(app);
