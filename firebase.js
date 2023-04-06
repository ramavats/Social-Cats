import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBnb-KMTu-PDNbThVdm_7tab5ad6w7UVZk",
    authDomain: "my-cat-app-19908.firebaseapp.com",
    projectId: "my-cat-app-19908",
    storageBucket: "my-cat-app-19908.appspot.com",
    messagingSenderId: "621222619825",
    appId: "1:621222619825:web:e5850625b4fa27d0319090",
    measurementId: "G-EQPH44FFJY"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
