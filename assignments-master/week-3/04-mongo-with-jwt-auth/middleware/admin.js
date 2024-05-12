// Middleware for handling auth
const SECRET_KEY = require("../config");
const jwt = require('jsonwebtoken');
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
console.log('Hi There');
    const Bearertoken = req.headers.authorization; // Bearer etqy.sagas.agasg
    const words = Bearertoken.split(' ');
    const token = words[1];

    try{
        const decodedValue = jwt.verify(token, SECRET_KEY);
        if(decodedValue.username){
            next();
        }
    }
    catch(err){
        res.status(401).json({
            message: "Unauthorized User"
        }) 
    }
    // Verify the token with the secret
 

    
}

module.exports = adminMiddleware;