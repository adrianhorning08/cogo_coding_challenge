var express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
var app = express();

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});


app.listen(3000, function () {
  console.log('Dev app listening on port 3000!');
});
