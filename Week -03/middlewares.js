const express = require('express');

const app = express();
const PORT = process.env.PORT || 4001;

function oldEnoughMiddleware(req, res, next){

    const age = req.query.age;

    if(!age || age < 14){
       res.json({msg: "You're not old enough to go on this ride"})
    }
    else{
        next();
    }

}

app.use(oldEnoughMiddleware); // Global Middleware

app.get("/ride1",oldEnoughMiddleware,  function(req, res){

    res.json({
        msg: "You've taken ride 1 successfully"
    })
})
app.get("/ride2",oldEnoughMiddleware,  function(req, res){

    res.json({
        msg: "You've taken ride 1 successfully"
    })
})

app.listen(PORT);