import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCzKqdnWlQRT9RSB1N-uNxtpNSS-gLcyng",
  authDomain: "amantran-b9c19.firebaseapp.com",
  projectId: "amantran-b9c19",
  storageBucket: "amantran-b9c19.firebasestorage.app",
  messagingSenderId: "337863250861",
  appId: "1:337863250861:web:139bcf878c3ecb308f4724",
  measurementId: "G-LF15GEH44Z"
};

// Initialize Firebase (guard against re-initialization during fast refresh / SSR)
export const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
