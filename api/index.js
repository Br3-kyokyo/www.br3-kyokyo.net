const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
require('dotenv').config()

app.get('/', function(req, res) {
  res.send('HelloWorld')
})

module.exports = {
  path: '/api/',
  handler: app
}
