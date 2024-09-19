// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const authDomain = process.env.REACT_APP__FIREBASE_AUTH_DOMAIN;
const projectId = process.env.REACT_APP__FIREBASE_PROJECT_ID;
const storageBucket = process.env.REACT_APP__FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.REACT_APP__FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.REACT_APP__FIREBASE_APP_ID;
const measurementId = process.env.REACT_APP__FIREBASE_MEASUREMENT_ID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

export const firebaseApp = initializeApp(firebaseConfig);
