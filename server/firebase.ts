import { initializeApp } from "firebase/app";
//import * as dotenv from "dotenv";
//dotenv.config();

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuEfcIWVrWHnF_RqsvqkqUYG_7u2y3lbs",
    authDomain: "funny-fur.firebaseapp.com",
    projectId: "funny-fur",
    storageBucket: "funny-fur.appspot.com",
    messagingSenderId: "644170927273",
    appId: "1:644170927273:web:cca2aad1d763f45885adb8"
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp as default };
