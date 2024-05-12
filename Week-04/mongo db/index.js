const express = require('express');
const admin = require('./routes/admin')
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;


app.use(bodyParser.json());

app.use('/admin', admin)

app.listen(PORT, ()=>{
    console.log(`App is listening on port ${PORT}`);
})