const jwt = require ('jsonwebtoken');
const SECRET_KEY = require ('../config');
function userMiddleware (req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const bearerToken = req.headers.authorization; // Bearer Token
  const words = bearerToken.split (' ');
  const token = words[1];
  const decodedValue = jwt.verify (token, SECRET_KEY);

  try{
    if (decodedValue.username) {
        req.username = decodedValue.username;
        next ();
      } else {
        res.status (403).json({
          message: 'Unauthorized User',
        });
      }
  }
  catch(err){
    res.status (403).json({
      message: 'Unauthorized User',
    });
  }

}

module.exports = userMiddleware;
