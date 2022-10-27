 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlYQCz4Y5nyop9CPx08AI6Q_S7i8frtlo",
  authDomain: "reactjs-6e5ac.firebaseapp.com",
  projectId: "reactjs-6e5ac",
  storageBucket: "reactjs-6e5ac.appspot.com",
  messagingSenderId: "60255253161",
  appId: "1:60255253161:web:3d9855ec5927adabbaefb8",
  measurementId: "G-DDVXC3Z99P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;