var express = require('express');
var route = require('express').Router();
var app = express();

// setup the app middleware
require('./middleware/appMiddleware')(app);
// setup the api
app.use('/api', require('./api/api'));

module.exports = app;
