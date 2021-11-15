import firebase from 'firebase/compat/app';
import { getStorage } from "firebase/storage";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDc9uvlYhOYNT1ein7OXSHFBYPtqSJHCjo",
    authDomain: "disneyplus-e44ef.firebaseapp.com",
    projectId: "disneyplus-e44ef",
    storageBucket: "disneyplus-e44ef.appspot.com",
    messagingSenderId: "98114116900",
    appId: "1:98114116900:web:9c7e7b282cfef2b6a067b1",
    measurementId: "G-1C8G7808TZ"
};
  
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;