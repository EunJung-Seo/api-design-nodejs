var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');
var _ = require('lodash');

var lionsRouter = require('./lions');

app.use(morgan('dev'))
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

app.use('/lions', lionsRouter);

// Middleware
app.use(function(err, req, res, next){
  if(err){
    res.status(500).send(err);
  }
}) 

module.exports = app;
// app.listen(3000);
