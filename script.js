// Welcome to Shep's Backend Project. Super Organzied. Everything Commented. Super Readable.

//!-----IMPORTS-----!
const sql = require('mysql2');

//!-----Making the connection to the DB-----!
const con = sql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });

//!-----Collecting the User Data to be stored in the future-----!
const userInfo = document.getElementById('user-info');

emailField.addEventListener("click", (e) =>{
    //Prevents the page from autoreloading
    e.preventDefault();
    const email = userInfo.email.value;
    const name = userInfo.name.value;
    const phoneNumber = userInfo.phone.value;
    const ccNum = userInfo.ccnum.value;
    const cvv = userInfo.cvv.value;
    const expireDate = userInfo.exp.value;

});

