const exp = require('constants');
const express = require ('express');
const zod = require('zod');

const app = express ();
const PORT = process.env.PORT || 3006;

function userMiddleware (req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != 'Utkarsh' && password != 'pass') {
    return res.status (401).json ({msg: 'User does not exists'});
  } else {
    next ();
  }
}

function kidneyMiddleware(req, res, next){

    const kidneyCount = req.query.kidneyCount;
    if (kidneyCount != 1 && kidneyCount != 2) {
        return res.status (411).json ({msg: 'Wrong Inputs'});
    }
    else{
        next();
    }
}

// userAuth, kidneyCheck are callback functions called Middlewares which takes request, response and next() as input 
// Sits in middle of url and request-Response handler
app.get ('/health-checkup', userMiddleware, kidneyMiddleware, function (req, res) {
  res.json ({msg: 'Kidney is healthy'});
});
app.get ('/heart-checkup', userMiddleware, function (req, res) {
  res.json ({msg: 'Heart is healthy'});
});

const schema = zod.array(zod.number()) // Creates a Schema for Array of numbers

// Since we're using req.body we've to use express.json() middleware
app.use(express.json());
app.post('/kidney-checkup', function(req, res){

    const kidneys = req.body.kidneys; // Kidneys is an array of numbers (Validate it using zod)
    const totalKidneys = kidneys.length;

    res.send('You have '+totalKidneys +" kidneys")
})

// Global Catches
app.use(function(err, req, res, next){
    res.json({msg: 'Oops! Something went wrong !!'})
})

app.listen (PORT, () => {
  console.log ('Server is listening on port 3006');
});
