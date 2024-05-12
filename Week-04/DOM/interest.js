const express = require('express');
const PORT = process.env.PORT || 3003;

const app = express();
app.use(express.json());

app.get('/', function(req, res){
    res.send('Welcome')   
});

app.get('/getInterest', function(req, res){

    const p = req.query.p
    const r = req.query.r
    const t = req.query.t

    const interest = (parseInt(p) * parseInt(r) * parseInt(t))/100;
    const amount = +p + interest;

    res.json({
        amount,
        interest
    })

});

app.get('*', (err, req, res)=>{
    res.status(404).json({
        msg: 'Page Not Found',
    })
})


app.listen(PORT, ()=>{
    console.log('Server is listening on port ',PORT);
})