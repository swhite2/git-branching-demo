var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hallo allemaal')
})
 
app.listen(3000)