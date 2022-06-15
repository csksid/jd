import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyA91W_E8IRsbnV4yOi3cy9cKlrFv0-Ew9Q",
  authDomain: "idkdd-a7e08.firebaseapp.com",
  databaseURL: "https://idkdd-a7e08-default-rtdb.firebaseio.com",
  projectId: "idkdd-a7e08",
  storageBucket: "idkdd-a7e08.appspot.com",
  messagingSenderId: "962390866539",
  appId: "1:962390866539:web:9487d94c28c50cb1c64f2e"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
