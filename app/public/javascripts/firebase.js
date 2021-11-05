// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBF_Glt2e8FkcrUWCRhJdQdo28--uZ_nRI",
//   authDomain: "nftnews-c1250.firebaseapp.com",
//   projectId: "nftnews-c1250",
//   storageBucket: "nftnews-c1250.appspot.com",
//   messagingSenderId: "122382735615",
//   appId: "1:122382735615:web:96ff41bab6eaa03a7b14ca",
//   measurementId: "G-Y0FC789M35"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = app.firestore();

// function postEmail(email) {
//   db.collection('emails').doc(email).set({
//     email: email
//   }, {merge: true})
//   .then(() => {
//     console.log('email successfully written')
//   })
//   .catch((error) => {
//     console.lerror('Error writing document: ', error)
//   })
// }

// export {app, db, postEmail, analytics}