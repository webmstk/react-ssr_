require('babel-register');

var result = require('./render').default;

var express = require('express');
var application = express();

application.use(express.static('images'));

application.get('/', function(req, res) {
  res.send(result);
});

application.listen(3005);
