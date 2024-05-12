const express = require('express');
const jwt = require('jsonwebtoken');
const jwtPassword = '123456';

const app = express();
const PORT = process.env.PORT || 3008;

const users = [
    {username: 'Utkarsh', email: 'utkarsh@gmail.com', password: '12345'},
    {username: 'Ishwari', email: 'ishwari@gmail.com', password: '98763'},
    {username: 'Roger',   email: 'roger@gmail.com', password: '45673'},
]

app.use(express.json());

app.get('/', function(req,res){

    res.send('Welcome');
});

function userExists(username, password){

    return users.find((user)=> user.username == username && user.password == password); // Undefined if user does't exist
}

app.post('/signIn', function(req, res){

    const username = req.body.username;
    const password  = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: 'User does not exists'
        });
    }
    try{
        const jwtToken = jwt.sign({username}, jwtPassword)
        res.json({jwtToken})
    }
    catch{
        return res.status(403).json({
            msg: 'Username/Password is incorrect'
        })
    }
});

app.get('/getUsers', function(req, res){

  const token = req.headers.authorization;
  const decoded = jwt.verify(token, jwtPassword);
  const username = decoded.username;

  // Return all the users except itself
  const allUsers = users.filter((user)=> user.username != username);
  return res.json({
    allUsers
  })
})

app.listen(PORT);