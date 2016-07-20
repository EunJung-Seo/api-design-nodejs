var _ = require('lodash');
var lionsRouter = require('express').Router();

var lions = [];
var i = 0;

// Middleware
var updateId = function(req, res, next) {
  i += 1;
  req.body.id = i + '';
  next();
};

lionsRouter.param('id', function(req, res, next, id){
  var lions = _.find(lions, {id: id});
  if(lions){
    req.lions = lions;
    next();
  } else {
    res.send();
  }
})

// GET /lions
lionsRouter.get('/', function(req, res){
  res.json(lions);
})

// GET /lions/:id
lionsRouter.get('/:id', function(req, res){
  res.json(req.lion || {});
})

// POST /lions
lionsRouter.post('/', updateId, function(req, res){
  var data = req.body;
  lions.push(data);

  res.json(data);
})

// PUT /lions/:id
lionsRouter.put('/:id', function(req, res){
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
lionsRouter.delete('/:id', function(req, res){
  if(req.lion){
    var index = parseInt(req.lion.id) - 1;
    var deletedLion = lions[index];
    lions.splice(index, 1);
    res.json(deletedLion);
  } else {
    res.send();
  }
})

module.exports = lionsRouter;
