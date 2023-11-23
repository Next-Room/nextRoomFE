import { initializeApp, getApps, getApp } from "firebase/app";

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

// Firebase 앱 인스턴스 얻기 (필요한 경우)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = getApp();
