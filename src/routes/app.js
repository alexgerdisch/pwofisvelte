import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDL9Vfw5AJKfmeeXFRlFuyMKvH16C8lyGk",
    authDomain: "pwofibeta.firebaseapp.com",
    projectId: "pwofibeta",
    storageBucket: "pwofibeta.appspot.com",
    messagingSenderId: "612729901997",
    appId: "1:612729901997:web:cbfddce6f2bf647eb20724",
};

export const app = initializeApp(firebaseConfig);
console.log("Firebase App Started: ")
console.log(app);

export const auth = getAuth();

