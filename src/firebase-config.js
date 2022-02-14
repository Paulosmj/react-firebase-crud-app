
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBXvGgOH683Mz9DKKNch25QhsBYET-pXM",
    authDomain: "react-crud-7f26a.firebaseapp.com",
    projectId: "react-crud-7f26a",
    storageBucket: "react-crud-7f26a.appspot.com",
    messagingSenderId: "891234287027",
    appId: "1:891234287027:web:5d1b31ac1fc8de11f2dfc6",
    measurementId: "G-XJ50PLL3BM"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);