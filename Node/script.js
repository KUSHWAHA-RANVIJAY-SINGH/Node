const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World mohan')
}); 


app.get('/profile', function (req, res) {
    res.send('Hello');
  }); 


app.listen(3000)