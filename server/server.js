var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');
var _ = require('lodash');

app.use(morgan('dev'))
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

var lions = [];
var i = 0;

// Middleware
var updateId = function(req, res, next) {
  i += 1;
  req.body.id = i + '';
  next();
};

// app.param
app.param('id', function(req, res, next, id){
  var lion = _.find(lions, {id: id});
  if(lion){
    req.lion = lion;
    next();
  } else {
    res.send();
  }
})

// GET /lions
app.get('/lions', function(req, res){
  res.json(lions);
})

// GET /lions/:id
app.get('/lions/:id', function(req, res){
  res.json(req.lion || {});
})

// POST /lions
app.post('/lions', updateId, function(req, res){
  var data = req.body;
  lions.push(data);

  res.json(data);
})

// PUT /lions/:id
app.put('/lions/:id', function(req, res){
  var data = req.body;

  if(data.id){
    delete date.id;
  }

  // 해당 id의 data가 존재한다면, update / 그렇지 않다면 그냥 리턴 
  if(req.lion){
    var index = parseInt(req.lion.id) - 1; 
    var updatedLion = _.assign(lions[index], data);
    res.json(updatedLion);
  } else {
    res.send();
  }
})

// DELETE /lions/:id
app.delete('/lions/:id', function(req, res){
  if(req.lion){
    var index = parseInt(req.lion.id) - 1;
    var deletedLion = lions[index];
    lions.splice(index, 1);
    res.json(deletedLion);
  } else {
    res.send();
  }
})

// Middleware
app.use(function(err, req, res, next){
  if(err){
    res.status(500).send(err);
  }
}) 

app.listen(3000);
