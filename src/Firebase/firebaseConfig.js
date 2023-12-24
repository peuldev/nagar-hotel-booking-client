// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjCVjjKK4zUWUZic-7rbOg6jwSmsYXBeQ",
  authDomain: "nagar-hotel.firebaseapp.com",
  projectId: "nagar-hotel",
  storageBucket: "nagar-hotel.appspot.com",
  messagingSenderId: "972367511389",
  appId: "1:972367511389:web:cea33a75fbbe6ca82332b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
