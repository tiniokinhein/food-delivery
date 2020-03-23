import firebase from 'firebase/app'
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyC2rkrLKMDJZ2cnyfThMRjADAKUUs-mTfs",
    authDomain: "food-delivery-4f9bd.firebaseapp.com",
    databaseURL: "https://food-delivery-4f9bd.firebaseio.com",
    projectId: "food-delivery-4f9bd",
    storageBucket: "food-delivery-4f9bd.appspot.com",
    messagingSenderId: "456586004935",
    appId: "1:456586004935:web:190bffcd4d71673cfdb1e2"
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.database()