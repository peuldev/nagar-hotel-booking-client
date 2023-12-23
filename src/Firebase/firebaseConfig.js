// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEyZsI8-igINVPwstcVgpxVBqUYmSakHg",
  authDomain: "nagar-hotel-booking.firebaseapp.com",
  projectId: "nagar-hotel-booking",
  storageBucket: "nagar-hotel-booking.appspot.com",
  messagingSenderId: "267475985471",
  appId: "1:267475985471:web:c3f57c88adc83fb2d2c48a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
