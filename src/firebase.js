// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGSbzdyAQSjfrkBZq7ef0T9b71euOJf2M",
  authDomain: "fir-bookbinge.firebaseapp.com",
  projectId: "fir-bookbinge",
  storageBucket: "fir-bookbinge.appspot.com",
  messagingSenderId: "34792165604",
  appId: "1:34792165604:web:8ad79b7367640d67c29cf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)