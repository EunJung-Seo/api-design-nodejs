var morgan = require('morgan');
var bodyParser = require('body-parser');

// middleware
// 1. logger
// 2. bodyParser
// 3. json
// static은?
module.exports = function(app){
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extend: true}));
  app.use(bodyParser.json());
}
