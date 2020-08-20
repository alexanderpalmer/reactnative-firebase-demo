import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD9izt88wpYu_gVf1w2BvC2xPaGap4RqP8",
    authDomain: "reactnative-57c6b.firebaseapp.com",
    databaseURL: "https://reactnative-57c6b.firebaseio.com",
    projectId: "reactnative-57c6b",
    storageBucket: "reactnative-57c6b.appspot.com",
    messagingSenderId: "794768995053",
    appId: "1:794768995053:web:1a64f1bce820ff2a3812e4",
    measurementId: "G-34MRPD5K0C"
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const DB = () => { }

export default DB;
export const db = firebase.firestore();