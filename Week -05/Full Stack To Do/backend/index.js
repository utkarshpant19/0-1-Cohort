// Create basic express boilerplate code with express.json() middleware

const express = require("express");
const todos = require('./routes/todoRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', todos);


app.listen(PORT, function(){
    console.log(`App is listening on PORT ${PORT}`);
})



