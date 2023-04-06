import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
  // Replace with your own config object from Firebase
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
