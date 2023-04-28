// Welcome to Shep's Backend Project. Super Organzied. Everything Commented. Super Readable.

//!-----Imports-----!
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
//const path = require('path');


const data = express();
data.use(bodyParser.urlencoded({extended: true}));

var server = data.listen(5550, () => {
  var host = server.address().address
  var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port);
})

// MYSQL!
var connection = mysql.createConnection({
  host: 'localhost:5500',
  user: 'root',
  password: '',
  database: 'information'
})
connection.connect((err) => {
  if (err) throw err;
  console.log("Database Connected!");
})

module.exports = connection
//When Submit is Clicked!
data.post('/submit-form', (req, res) => {
  console.log('here');
  //res.sendFile(path.join(__dirname, 'home.html'));
  var emailInput = req.body.email;
  var nameInput = req.body.name;
  var ccInput = req.body.ccnum;
  var expDateInput = req.body.expdate;
  var cvvInput = req.body.cvv;
  var phoneInput = req.body.phone;
  
  console.log(emailInput);
  connection.connect((err) => {
    if (err) throw err;
    console.log("Database Connected!")
  })
  var sql = `INSERT INTO contacts (emailInput, nameInput, ccInput, expDateInput, cvvInput, phoneInput) VALUES ("${nameInput}", "${phoneInput}", "${expDateInput}", "${cvvInput}" "${emailInput}", "${ccInput}",   NOW())`;
  db.query(sql, function(err, result) {
    if (err) throw err;
    console.log('record inserted');
    req.flash('success', 'Data added successfully!');
    res.redirect('/');
  });
});