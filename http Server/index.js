const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json()) // To use json body in POST request

// Route Handler 
app.get('/', function(req, res){
 
    res.send('<h2>Hello World </h2>');
});

app.post('/sum', function(req, res){

    console.log(req.headers['authorization']);
    console.log('Request body ',req.body);
    console.log('Query Params ',req.query); 

    const resObj = {
        msg: '1 + 1 = 2'
    }

    console.log('Request Body ',req.body);
    res.json(resObj);
} )

app.get('/getUser',function(req, res){
    const user = {
        name: 'Utkarsh',
        age: 28
    }

    console.log('Request Body ',req.body);
    res.json(user);
})

app.listen(port, function(){ // Callback is optional
    console.log(`Server is listening on port ${port}`);
})