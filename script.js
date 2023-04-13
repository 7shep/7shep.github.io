// Welcome to Shep's Backend Project. Super Organzied. Everything Commented. Super Readable.

//!-----IMPORTS-----!
var data = require('mysql');

// !-----Creating the connection-----!
var con = mysql.createConnection({
    host: 'localhost',
    user: 'shep',
    password: 'secret',
    database: 'customer_info'
});

con.connect(function(err) { 
    if(err) {
        console.error('Error: ' + err.stack);
        return;
    }

    console.log('connected as ID: ' + connection.threadId);
});
