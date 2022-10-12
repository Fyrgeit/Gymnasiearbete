import { createApp } from "vue";
import App from "./App.vue";
import './assets/main.css';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";

createApp(App).mount("#app");

const appConfig = {
    apiKey: "AIzaSyA6aDMxjEsPa3eqfAGziOWuqZAzY62xbuo",
    authDomain: "gymnasiearbete-94f01.firebaseapp.com",
    projectId: "gymnasiearbete-94f01",
    storageBucket: "gymnasiearbete-94f01.appspot.com",
    messagingSenderId: "643209427896",
    appId: "1:643209427896:web:880d6eb21a0285f23eed4d",
};

const firebaseApp = initializeApp(appConfig);
const db = getFirestore(firebaseApp);

export default {
    doc,
    setDoc,
    updateDoc,
    arrayUnion,
    db,
}