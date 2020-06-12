import firebase from "firebase/app"
import "firebase/app"
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyCCBFB6LV-ueW_e8WfmaOMTnc3xrq8uJfM",
    authDomain: "m-city-37a97.firebaseapp.com",
    databaseURL: "https://m-city-37a97.firebaseio.com",
    projectId: "m-city-37a97",
    storageBucket: "m-city-37a97.appspot.com",
    messagingSenderId: "926475138545",
    appId: "1:926475138545:web:cf2d5801aa43f6f6eac050",
    measurementId: "G-SH39NQVMYG"
  };
  firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches')
const firebasePromotions = firebaseDB.ref('promotions')
export {
    firebase,
    firebaseMatches,
    firebasePromotions
}