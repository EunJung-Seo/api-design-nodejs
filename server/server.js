var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');

app.use(express.static('client'));
app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

var lions = [];
var i = 0;

// GET /lions
app.get('/lions', function(req, res){
  res.json(lions);
})

// GET /lions/:id
app.get('/lions/:id', function(req, res){
  var lion = _.find(lions, {id: req.params.id});
  res.json(lion || {});
})

// POST /lions
app.post('/lions', function(req, res){
  i += 1;
  var data = req.body;
  data.id = i + '';
  lions.push(data);
  
  res.json(data);
})

// PUT /lions/:id
app.put('/lions/:id', function(req, res){
  var data = req.body;
  // 업데이트한 데이터에 id가 있는 경우 -> 원래의 id를 사용해야 하기 때문에 업데이트 데이터 안의 id는 삭제
  if(data.id){
    delete date.id;
  }

  var index = _.findIndex(lions, {id: req.params.id});
  // 해당 id의 data가 존재한다면, update / 그렇지 않다면 그냥 리턴 
  if(lions[index]){
    var updatedLion = _.assign(lions[index], data);
    res.json(updatedLion);
  } else {
    res.send();
  }
})

// DELETE /lions/:id
app.delete('/lions/:id', function(req, res){
  var index = _.findIndex(lions, {id: req.params.id});
  if(lions[index]){
    res.send();
  } else {
    var deletedLion = lions[index];
    lions.splice(index, 1);
    res.json(deletedLion);
  }
})

app.listen(3000);
