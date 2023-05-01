// Welcome to Shep's Backend Project. Super Organzied. Everything Commented. Super Readable.

//!-----Imports-----!
const express = require('express');
const bodyParser = require('body-parser');
//const path = require('path');


const data = express();
data.use(bodyParser.urlencoded({extended: true}));

var server = data.listen(5550, () => {
  var host = server.address().address
  var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port);
})

// MYSQL!
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "shep",
  password: "password",
  database: "localhost/info"
});

con.connect(() => {
  console.log("Connected!")
});

con.query(`
  CREATE TABLE form_data (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    ccnum VARCHAR(19) NOT NULL,
    cvv VARCHAR(4) NOT NULL,
    expdate DATE NOT NULL,
    PRIMARY KEY (id)
  );`);
//When Submit is Clicked!
data.post('/submit-form', async (req, res) => {
  console.log('here');
  //res.sendFile(path.join(__dirname, 'home.html'));
  var email = req.body.email;
  var name = req.body.name;
  var cc = req.body.ccnum;
  var expdate = req.body.expdate;
  var cvv = req.body.cvv;
  var phone = req.body.phone;
  
  try {
    let sql = `INSERT INTO info (name, email, phone, ccnum, cvv, expdate) VALUES (?, ?, ?, ?, ?, ?)`;
    console.log('Form data inserted into table.');
    res.send('Form data submitted successfully.');
  } catch (err) {
    console.error('Error inserting data into database: ' + err.stack);
    res.status(500).send('Database error: Please try again later.');
  }
});
