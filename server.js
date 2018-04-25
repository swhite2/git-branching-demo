var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hallo allemaal2')
})
 
app.listen(3000)