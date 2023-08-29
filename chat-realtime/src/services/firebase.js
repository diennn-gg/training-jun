import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyUEhrusVyenjoOnoUFpxOA1atlZKurEI",
  authDomain: "komiq-32fe2.firebaseapp.com",
  projectId: "komiq-32fe2",
  storageBucket: "komiq-32fe2.appspot.com",
  messagingSenderId: "710066516988",
  appId: "1:710066516988:web:84480a755cfaaf91333879",
  measurementId: "G-STTG442WP8"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
