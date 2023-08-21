// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRfl_xk-PFcNhw0butAc1gu4R37i2-FgE",
  authDomain: "my-gym-app-e18c8.firebaseapp.com",
  projectId: "my-gym-app-e18c8",
  storageBucket: "my-gym-app-e18c8.appspot.com",
  messagingSenderId: "166796482211",
  appId: "1:166796482211:web:c6302a521ada0b440cd116",
  measurementId: "G-C2X6TY50BK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
