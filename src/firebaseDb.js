import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBYKkyO5VF7nQJ7wtHre4c-8CYjemwCzcc",
    authDomain: "blog-766b6.firebaseapp.com",
    databaseURL: "https://blog-766b6.firebaseio.com",
    projectId: "blog-766b6",
    storageBucket: "blog-766b6.appspot.com",
    messagingSenderId: "181846486611",
    appId: "1:181846486611:web:7792f0206834d11e5b60a6",
    measurementId: "G-V7G5LS1VN4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
