// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "steelpoint-7e607.firebaseapp.com",
  projectId: "steelpoint-7e607",
  storageBucket: "steelpoint-7e607.appspot.com",
  messagingSenderId: "643478377694",
  appId: "1:643478377694:web:84a669c885736da8629e4f"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);