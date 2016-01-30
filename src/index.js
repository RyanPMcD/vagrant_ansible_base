var express = require('express');
var app = express();
var abacusService = require('./abacusService');


app.get('/', function(req, res) {
  abacusService.getData(function(err, data) {
    if (err) {console.log(err);}
    res.send(data);
  });
});

app.listen(3000, function() {
  console.log('starting app on port 3000');
});