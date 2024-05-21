import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAWH4FHOf3wzRXAmqE1mnCB-r_XGT-fpXA",
  authDomain: "chat-app-3cd54.firebaseapp.com",
  projectId: "chat-app-3cd54",
  storageBucket: "chat-app-3cd54.appspot.com",
  messagingSenderId: "826598458985",
  appId: "1:826598458985:web:7c750b4c4e1b2632f504f8"
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth()

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth };