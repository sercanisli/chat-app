import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg1yRKponWWdQNSHhwyZXJQg_rEy60AzU",
  authDomain: "chat-app-51944.firebaseapp.com",
  projectId: "chat-app-51944",
  storageBucket: "chat-app-51944.appspot.com",
  messagingSenderId: "867799189161",
  appId: "1:867799189161:web:0455b302973654d1c08bb8"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp };