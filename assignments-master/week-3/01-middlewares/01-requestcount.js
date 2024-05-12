const express = require('express')

const app = express();
const PORT = process.env.PORT || 3009;
app.use(express.json());
let requestCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

function updateRequestCount(req, res, next){
  requestCount++;
}


app.use(updateRequestCount); // Middleware that updates the request count

app.get('/', function(req, res){
  return res.json({msg: 'hello'})
})

// app.get('/user', function(req, res) {
//   res.status(200).json({ name: 'john' });
// });

// app.post('/user', function(req, res) {
//   res.status(200).json({ msg: 'created dummy user' });
// });

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestCount });
});

app.listen(PORT, function(){
  console.log('Server is listening on port ',PORT);
});

module.exports = app;