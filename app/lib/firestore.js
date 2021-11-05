const firebase = require('firebase/app')
const { getFirestore, collection, getDocs } = require('firebase/firestore')

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF_Glt2e8FkcrUWCRhJdQdo28--uZ_nRI",
  authDomain: "nftnews-c1250.firebaseapp.com",
  projectId: "nftnews-c1250",
  storageBucket: "nftnews-c1250.appspot.com",
  messagingSenderId: "122382735615",
  appId: "1:122382735615:web:96ff41bab6eaa03a7b14ca",
  measurementId: "G-Y0FC789M35"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
var db = getFirestore(firebaseApp)

module.exports = db;