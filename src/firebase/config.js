// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

//----------Import Auth-------------------
import { getAuth, onAuthStateChanged} from "firebase/auth";
import { useAuthenticationStore } from "../stores/authentication";

//----------Import Firestore-------------------
import { getFirestore } from "firebase/firestore";

//----------Import Storage y DatabaseRT-------------------
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyBXyv-kzGUGMitC5ph64lzsPJmcr-FHr3o",
  authDomain: "contact-list-js.firebaseapp.com",
  databaseURL: "https://contact-list-js.firebaseio.com", 
  projectId: "contact-list-js",
  storageBucket: "contact-list-js.appspot.com",
  messagingSenderId: "556900195355",
  appId: "1:556900195355:web:72b266d801dfb94b4f6cbe",
  measurementId: "G-1Z910G9P9C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Authentication and get a reference to the service
const auth = getAuth(app); 

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

onAuthStateChanged(auth, (user) => {
    const authStores =useAuthenticationStore()
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      authStores.user=user;
    } else {
      authStores.user=null;
      console.log("User vacío",authStores.user)  
    }
  });

  export {auth}
  export {db}
  export {storage}
  export {database}
