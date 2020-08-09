import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBb8PAxEoRR3SaXpWMoqShbnCY8BCiFCUc",
    authDomain: "react-image-upload-2a22a.firebaseapp.com",
    databaseURL: "https://react-image-upload-2a22a.firebaseio.com",
    projectId: "react-image-upload-2a22a",
    storageBucket: "react-image-upload-2a22a.appspot.com",
    messagingSenderId: "294056388205",
    appId: "1:294056388205:web:d1a9b0fef846df020b4164"
};

firebase.initializeApp(firebaseConfig)

const storage =firebase.storage();

export { storage, firebase as default };