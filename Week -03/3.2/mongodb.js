const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const jwtPassword = 'abcd12345';

const app = express();
const PORT = process.env.PORT || 4000;
const DB_CONNECTION_STRING = 'mongodb+srv://utkarshpant1994:Utkarsh%401995@cluster0.hep5gr7.mongodb.net/userApp';

mongoose.connect(DB_CONNECTION_STRING);

// Define the Table Structure
const User = mongoose.model('users', {
    username: 'String',
    email: 'String',
    password: 'String'
});


app.use(express.json());


app.post('/signUp', async function(req, res, next){

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await User.findOne({email});

    if(!existingUser){
        res.status(401).json({
            msg: 'User already exists for this email'
        })
    }

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    user.save();

    res.json({
        msg: 'User is added successfully'
    })



});

app.post('/signIn', function(req, res){

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const token = jwt.sign({username}, jwtPassword);
    res.json({
        token,
        msg: 'Signed in successfully'
    })

});

app.get('/users', function(req, res){

})

app.use((err, req,res,next)=>{
   
    return res.status(500).json({
        msg: 'Something broke'
    })
})

app.listen(PORT, ()=>{
    console.log('App is listening on port '+PORT);
})