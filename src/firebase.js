import firebase from "firebase";
// import "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyBUFEuXSjqBJEUvqJiDC37yj_J6syVMyAw",
    authDomain: "collectionapp-5c486.firebaseapp.com",
    projectId: "collectionapp-5c486",
    storageBucket: "collectionapp-5c486.appspot.com",
    messagingSenderId: "1075092197537",
    appId: "1:1075092197537:web:6765168b41810a298920e0"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;