// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvTrg6fviMb77gL5HMwLa6NM2TfNMlP90",
  authDomain: "bobcatgram-bcc61.firebaseapp.com",
  projectId: "bobcatgram-bcc61",
  storageBucket: "bobcatgram-bcc61.firebasestorage.app",
  messagingSenderId: "622739063633",
  appId: "1:622739063633:web:4ec7409f788b0f87b58970",
  measurementId: "G-VRGDEJ4BYL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);