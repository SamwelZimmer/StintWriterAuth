import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, where, getDocs, getDoc, doc, query, limit, setDoc, orderBy, startAt } from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getStorage } from "firebase/storage";

import { encryptData } from "./credentials";
import { DEVELOPMENT_APP_SERVER, PRODUCTION_APP_SERVER } from "./constants";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-KIBtmZih6P2swX7wKGL01UJUysTLw3M",
    authDomain: "daily-writer.firebaseapp.com",
    projectId: "daily-writer",
    storageBucket: "daily-writer.appspot.com",
    messagingSenderId: "30535688818",
    appId: "1:30535688818:web:fced6302f08c15f86fd8eb",
    measurementId: "G-1R9ZE3VSWM"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

// Initialisation can only happen once, this stop re-firing
function createFirebaseApp(config) {
    try {
      return getApp();
    } catch {
      return initializeApp(config);
    }
}

const firebaseApp = createFirebaseApp(firebaseConfig);
export { firebaseApp, getAnalytics, logEvent };

// Auth exports
export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

// Firestore exports
export const firestore = getFirestore(firebaseApp);

// Storage exports
export const storage = getStorage(firebaseApp);
export const STATE_CHANGED = 'state_changed';

export const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleAuthProvider);
        const user = res.user;
        const q = query(collection(firestore, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await setDoc(doc(firestore, "users", user.uid), {
                uid: user.uid,
                email: user.email,
                name: user.displayName,
                authProvider: "google",
            });
        };

        const encryptedData = encryptData({ userId: user.uid });    

        if (window.location.hostname === "localhost") {
            window.location.href = `${DEVELOPMENT_APP_SERVER}/auth?auth=${encryptedData}`;
        } else {
            window.location.href = `${PRODUCTION_APP_SERVER}/auth?auth=${encryptedData}`;
        }
        

    } catch (e) {
        console.log(e);
    }
}