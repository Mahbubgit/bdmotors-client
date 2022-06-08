// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGmzlmfhEMtdXj9ZR_QDPIc1GJ5JsBUDo",
  authDomain: "bdmotors-aeadc.firebaseapp.com",
  projectId: "bdmotors-aeadc",
  storageBucket: "bdmotors-aeadc.appspot.com",
  messagingSenderId: "409562744100",
  appId: "1:409562744100:web:748af98f2c56919ea8dfb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;