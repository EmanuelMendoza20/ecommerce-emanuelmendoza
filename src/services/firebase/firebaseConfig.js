// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwELmCEMlhLaLQI6xjso4bxw1xwpeEMDA",
  authDomain: "tienda-coder-ce145.firebaseapp.com",
  projectId: "tienda-coder-ce145",
  storageBucket: "tienda-coder-ce145.appspot.com",
  messagingSenderId: "52165067212",
  appId: "1:52165067212:web:bf9716497d3f5541f0dd69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)