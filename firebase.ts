// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD6zG4muYpA4gQV7iQTrBjXwW909Lvn714',
  authDomain: 'chatgpt-enhanced.firebaseapp.com',
  projectId: 'chatgpt-enhanced',
  storageBucket: 'chatgpt-enhanced.appspot.com',
  messagingSenderId: '714244863826',
  appId: '1:714244863826:web:cd1794ce73ac004c1a2c8b',
  measurementId: 'G-542E82XCV0',
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };
