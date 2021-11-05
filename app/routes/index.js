const express = require('express')
const router = express.Router()
const db = require('../lib/firestore')
const { collection, doc, setDoc } = require('firebase/firestore')

// export {app, db, collection, postEmail, analytics}
router.all('/', function(req, res, next) {
  res.render('index')
})

router.post('/submit/:email', async function(req, res, next) {
  const email = req.params.email;
  console.log("email received: ", email)
  const coll = collection(db, 'emails')
  const docRef = doc(db, 'emails', email)
  setDoc(docRef, {email: email}, {merge: true})
})

router.get('/pn', function(req, res, next) {
  res.json({pn: true})
})

module.exports = router