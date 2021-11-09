require('dotenv').config()
const appRoot = '.'
const createError = require('http-errors')
const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const { queryParser } = require('express-query-parser')
const { web } = require('webpack')
const functions = require('firebase-functions')

Object.defineProperty(module.exports, "__esModule", { value: true });

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
  console.log('error message', err.message)
  res.status(err.status || 500)
  // res.send('Error: ', err.message)
  res.render('error')
  console.log('finished render error view')
  // res.db = db
})

// module.exports = app
// module.exports = functions.https.onRequest(app)
exports.helloWorld = functions.https.onRequest(app)
// console.log('module xxxx', module)