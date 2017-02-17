var express = require('express');
var path = require('path');
var app = express();
var db = require('./db.js');

var port = process.env.PORT || '3000';


app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/store', db.getAllContent);

app.listen(port, function () {
  console.log(' Example app listening on port 3000!');
});
