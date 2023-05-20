// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARLV9Jzz7nl13RXWsrECZg87O0Z5bBkRg",
  authDomain: "toy-biz-client.firebaseapp.com",
  projectId: "toy-biz-client",
  storageBucket: "toy-biz-client.appspot.com",
  messagingSenderId: "1038231826550",
  appId: "1:1038231826550:web:233844a1b7202f18442f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;