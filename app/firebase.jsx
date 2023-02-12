import {initializeApp} from "firebase/app"
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDn6fq1QoJwPOkKi_zllBwt30PllJvbeDE",
    authDomain: "twitter-clone-bdb21.firebaseapp.com",
    projectId: "twitter-clone-bdb21",
    storageBucket: "twitter-clone-bdb21.appspot.com",
    messagingSenderId: "994810571733",
    appId: "1:994810571733:web:5753a02841ad1bc6356b5c",
    measurementId: "G-CXGVZ3WBMH"
  };

 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);