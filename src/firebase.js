import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ-cEywutwdInUIJJDcl5iqwMoQTC3gS0",
  authDomain: "amezon-clone-46ca6.firebaseapp.com",
  projectId: "amezon-clone-46ca6",
  storageBucket: "amezon-clone-46ca6.appspot.com",
  messagingSenderId: "657169528619",
  appId: "1:657169528619:web:a514e1dda403be84b3376e",
  measurementId: "G-DHBR4RTYL8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
