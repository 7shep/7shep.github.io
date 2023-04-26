// Welcome to Shep's Backend Project. Super Organzied. Everything Commented. Super Readable.

//!-----Imports-----!
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

var url = "mongodb:127.0.0.1:5500"

const data = express();
//data.use(bodyParser.urlencoded({extended: true}));

var server = data.listen(5550, () => {
  var host = server.address().address
  var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    ccnum: Number,
    cvv: Number,
    exp: String
  });
 
//mongoose.connect('127.0.0.1:5500', {useNewUrlParser: true, useUnifiedTopology: true});

//const info = mongoose.model('Information: ', userSchema)

data.get('/test', (req, res) => {
  console.log('test');
})

data.post('/submit-form', (req, res, email) => {
  console.log('here');
  res.sendFile(path.join(__dirname, 'home.html'));
});