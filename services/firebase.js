import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC907NnDBPSv7XvTm3Qitm3j-877g_u6o8",
  authDomain: "projeto-mvp-app-e89c6.firebaseapp.com",
  projectId: "projeto-mvp-app-e89c6",
  storageBucket: "projeto-mvp-app-e89c6.appspot.com",
  messagingSenderId: "667588419854",
  appId: "1:667588419854:web:1a51fa225308f3eb7d375f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
