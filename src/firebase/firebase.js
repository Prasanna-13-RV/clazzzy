import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDoTCWGdubwhpET-s1qqYS5Uc5XZ3_qDSY",
    authDomain: "ecommerce-ac0b9.firebaseapp.com",
    projectId: "ecommerce-ac0b9",
    storageBucket: "ecommerce-ac0b9.appspot.com",
    messagingSenderId: "169986839912",
    appId: "1:169986839912:web:716f5ec381b29118de32dd",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

export const db = getFirestore(app);
