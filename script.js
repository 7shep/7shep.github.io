// Welcome to Shep's Backend Project. Super Organzied. Everything Commented. Super Readable.

//!-----Imports-----!
const express = require('express');
const bodyParser = require('body-parser');
//const path = require('path');

var url = "mongodb:127.0.0.1:5500"

const data = express();
data.use(bodyParser.urlencoded({extended: true}));

var server = data.listen(5550, () => {
  var host = server.address().address
  var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port);
})

// MONGODB!!

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:5550/";

//When Submit is Clicked!
data.post('/submit-form', (req, res, MongoClient) => {
  console.log('here');
  //res.sendFile(path.join(__dirname, 'home.html'));
  var emailInput = req.body.email;
  var nameInput = req.body.name;
  var ccInput = req.body.ccnum;
  var expDateInput = req.body.expdate;
  var cvvInput = req.body.cvv;
  var phoneInput = req.body.phone;
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var db = db.db("information");
    var information = [emailInput, nameInput, ccInput, expDateInput, cvvInput, phoneInput];
    db.collection("info").insertMany(information, (err, res) => {
      if (err) throw err;
      console.log("Inserted " + res.insertedCount + "documents");
      db.close();
    });
  });

});