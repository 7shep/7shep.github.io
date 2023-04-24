// Welcome to Shep's Backend Project. Super Organzied. Everything Commented. Super Readable.

//!-----Imports-----!
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const data = express();
data.use(bodyParser.urlencoded({extended: true}));

const userSchema = new mongoose.Schema({
    email: String,
    phone: Number,
    ccnum: Number,
    cvv: Number,
    exp: String
  });

mongoose.connect('127.0.0.1:5500', {useNewUrlParser: true, useUnifiedTopology: true});

const info = mongoose.model('Information: ', userSchema)

data.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
})