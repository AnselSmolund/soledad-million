import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
const authDomain = process.env.REACT_APP__FIREBASE_AUTH_DOMAIN;
const projectId = process.env.REACT_APP__FIREBASE_PROJECT_ID;
const storageBucket = process.env.REACT_APP__FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.REACT_APP__FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.REACT_APP__FIREBASE_APP_ID;
const measurementId = process.env.REACT_APP__FIREBASE_MEASUREMENT_ID;


const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);