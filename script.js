// Welcome to Shep's Backend Project. Super Organzied. Everything Commented. Super Readable.

//!-----Imports-----!
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//!-----Constants-----!
const data = express();
const port = process.env.PORT || 5500;
mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const formSchema = new mongoose.Schema({
  phone: String,
  email: String,
  ccnum: String,
  cvv: String,
  exp: String,
});

const Form = mongoose.model('Form', formSchema);

data.use(bodyParser.json());

data.post('/submit-form', (req, res) => {
  const form = new Form(req.body);

  form.save((err, form) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving form data');
    } else {
      res.send('Form data saved successfully');
    }
  });
});

data.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

data.connect((err, client) =>{
    if (err) {
        console.error(err);
        return;
    }
})
