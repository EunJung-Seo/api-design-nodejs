
var express = require('express');
var fs = require('fs');

var app = express();
var jsonData = {count: 12, message: 'hey' };


app.get('/', function(req, res){
  // res.render('index.html');
  // directory + filename
  res.sendFile(__dirname + '/index.html', function(err){
    if(err) {
      res.status(500).send(err);
    }
  })
  // fs.readFile('index.html', function(err, buffer){
  //   var html = buffer.toString();
  //   res.setHeader('Content-Type', 'text/html');
  //   res.send(html);
  // })
});

app.get('/data', function(req, res){
  res.json(jsonData);
});

app.listen(3000, function(){
  console.log('listening on localhost:3000');
});
