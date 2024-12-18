// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8FGbZioTFhAoiSPAqeZt-iUmzGOwcnrI",
  authDomain: "finaleexam-530c2.firebaseapp.com",
  projectId: "finaleexam-530c2",
  storageBucket: "finaleexam-530c2.firebasestorage.app",
  messagingSenderId: "251584332481",
  appId: "1:251584332481:web:4a7802c188c2eb511a4a40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app