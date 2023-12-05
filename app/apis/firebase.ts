import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAquzRkRccQovbUZwg0CqLoXQOpfuxBJhU",
  authDomain: "nextroom-1d5d9.firebaseapp.com",
  projectId: "nextroom-1d5d9",
  storageBucket: "nextroom-1d5d9.appspot.com",
  messagingSenderId: "126156962007",
  appId: "1:126156962007:web:9b3bfa79d63f1601d65892",
  measurementId: "G-G7BVQSL1XE",
};

// Initialize Firebase
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const app = getApp();
export const db = getFirestore(app);
