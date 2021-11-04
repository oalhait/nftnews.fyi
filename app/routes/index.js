const express = require('express')
const router = express.Router()

router.all('/', function(req, res, next) {
  res.render('index')
})

router.get('/pn', function(req, res, next) {
  res.json({pn: true})
})

module.exports = router