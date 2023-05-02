// Welcome to Shep's Backend Project. Super Organzied. Everything Commented. Super Readable.

//!-----Imports-----!
const express = require('express');
const bodyParser = require('body-parser');
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//const path = require('path');


const data = express();
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase, ref, set } from "https://sheps-tej4m-default-rtdb.firebaseio.com/";


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

  sendInformation(email, name, cc, expdate, cvv, phone);
});

function sendMessage(email, name, cc, expdate, cvv, phone) {
  const database = getDatabase();

  //Math is for a random UID between 1 and 10000
  set(ref(database, 'users/' + Math.floor(Math.random() * 10000)), {
    name: name,
    email: email,
    creditcard: cc,
    expiredate: expdate,
    cvv: cvv,
    phonenumber: phone
  }).then(() => {

  })
}


