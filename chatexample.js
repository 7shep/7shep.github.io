const express = require('express');
const bodyParser = require('body-parser');

const data = express();
data.use(bodyParser.urlencoded({ extended: true }));

const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "shep",
  password: "password",
  database: "information"
});

con.connect(() => {
  console.log('Connected to MySQL server.');
});

data.post('/submit-form', (req, res) => {
    const emailInput = req.body.email;
    const nameInput = req.body.name;
    const ccInput = req.body.ccnum;
    const expDateInput = req.body.expdate;
    const cvvInput = req.body.cvv;
    const phoneInput = req.body.phone;
  
    const sql = `INSERT INTO form_data (name, email, phone, ccnum, cvv, expdate) 
                 VALUES (?, ?, ?, ?, ?, ?)`;
  
    if (con.state === 'disconnected') {
      console.error('MySQL connection is closed.');
      res.status(500).send('Database error: Please try again later.');
      return;
    }
  
    con.query(sql, [nameInput, emailInput, phoneInput, ccInput, cvvInput, expDateInput], (err, result) => {
      if (err) {
        console.error('Error inserting data into database: ' + err.stack);
        res.status(500).send('Database error: Please try again later.');
        return;
      }
  
      console.log('Form data inserted into table.');
      res.send('Form data submitted successfully.');
    });
  });
