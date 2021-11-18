const express = require('express')
const bodyParser = require('body-parser')
const keys = require('./keys/index')
const app = express()


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

module.exports = app
