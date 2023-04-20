// Welcome to Shep's Backend Project. Super Organzied. Everything Commented. Super Readable.

//!-----Imports-----!
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//!-----Constants-----!
const data = express();

const userInfo = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    ccnum: Number,
    cvv: Number,
    exp: String
});

const User = mongoose.model('User', userInfo);

//Tells express to use bodyparser to parse the url
data.use(bodyParser.urlencoded({extended: false}));

//Gets called when the form is submitted on the frontend
//Res = Response, Req = request
data.post('/submit-info', (req, res) => {
    const user = new User({
        name: req.body['name'],
        email: req.body['email'],
        phone: req.body['phone'],
        ccnum: req.body['ccnum'],
        cvv: req.body['cvv'],
        exp: req.body['exp']
    });

    user.save()
        .then(() => {
            res.send('Form submitted successfully');
        })
        //Catches an error if one occurs
        .catch((err) => {
            res.status(400).send('Error submitting form');
        });
});

//Listens to port 5500, where my webserver is hosted
data.listen(5500, (name) =>{
    console.log("Server started on port 5500");
    console.log(name);
})
