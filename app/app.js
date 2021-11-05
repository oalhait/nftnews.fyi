require('dotenv').config()
const appRoot = require('app-root-path')
const createError = require('http-errors')
const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const { queryParser } = require('express-query-parser')
const { web } = require('webpack')
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

// any self defined apis go in lib/

// modules used
const views = appRoot + '/app/views'
const webroot = appRoot + '/app/public'
const bootstrap = appRoot + '/node_modules/bootstrap/dist'
const moment = appRoot + '/node_modules/moment/min'
const fontawesome = appRoot + '/node_modules/@fortawesome/fontawesome-free'
const jquery = appRoot + '/node_modules/jquery/dist'
const charts = appRoot + '/node_modules/chart.js/dist'

const app = express()

app.set('views', views)
app.set('view engine', 'pug')
app.set('env', 'development')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(queryParser({ parseNull: true, parseBoolean: true }))

app.use(function (req, res, next) {
  res.locals.version = process.env.npm_package_version
  next()
})

app.use(express.static(webroot))
app.use('/js', express.static(bootstrap + '/js'))
app.use('/css', express.static(bootstrap + '/css'))
app.use('/js', express.static(moment))
app.use('/js', express.static(fontawesome + '/js'))
app.use('/css', express.static(fontawesome + '/css'))
app.use('/fonts', express.static(fontawesome + '/fonts'))
app.use('/webfonts', express.static(fontawesome + '/webfonts'))
app.use('/js', express.static(jquery))
app.use('/js', express.static(charts))
app.use('/font', express.static(webroot + '/font'))
app.use('/img', express.static(webroot + '/images'))
app.use('/css', express.static(webroot + '/stylesheets'))
app.use('/js', express.static(webroot + '/javascripts'))

// hooking up routes
app.use('/', require('./routes/index'))
// app.use('/practice', require('./routes/practice'))
// app.use('/dashboard', require('./routes/dashboard'))

app.use(function (req, res, next) {
  next(createError(404))
})

app.use(function (err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
  res.db = db
})

module.exports = app