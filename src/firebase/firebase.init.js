// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBW43kM5QS2MNwU48exPlGhvSWi62V3U70",
  authDomain: "news-times-a0d57.firebaseapp.com",
  projectId: "news-times-a0d57",
  storageBucket: "news-times-a0d57.firebasestorage.app",
  messagingSenderId: "1083152605802",
  appId: "1:1083152605802:web:39dcc8f7264bef8eb12013"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);