// Import the functions you need from the SDKs you need

import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import 'firebase/auth';


const app = initializeApp({
  apiKey: "AIzaSyBDDCOwYVLlu4l0y0B6BSNDcAmEDewPxJM",

  authDomain: "phototagging-4f97c.firebaseapp.com",

  projectId: "phototagging-4f97c",

  storageBucket: "phototagging-4f97c.appspot.com",

  messagingSenderId: "1002723194235",

  appId: "1:1002723194235:web:e427fd1c25159105a4b9de"
})

export default getFirestore(); 