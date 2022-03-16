import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHLpXA0kIeGKAmC9JrVWVVRXQD-k92AU4",
  authDomain: "hackatonsolo.firebaseapp.com",
  projectId: "hackatonsolo",
  storageBucket: "hackatonsolo.appspot.com",
  messagingSenderId: "597782946054",
  appId: "1:597782946054:web:efa9dbcce7bb8a0e5efe87",
  measurementId: "G-7KE29WMGTT",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
