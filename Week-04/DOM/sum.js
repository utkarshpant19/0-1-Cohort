const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', function(req, res){
    res.send('Welcome');
})

app.get('/getSum', function(req, res){

    const num1 = req.query.num1;
    const num2 = req.query.num2;

    const sum = parseInt(num1) + parseInt(num2);
    res.send(sum.toString());
})




app.listen(PORT, function(req, res){
    console.log('App is listening on Server ',PORT);
})