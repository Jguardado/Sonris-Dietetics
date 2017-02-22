var express = require('express');
var path = require('path');
var app = express();
var csv = require('express-csv')
var db = require('./db.js');

var port = process.env.PORT || '3000';


app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

// app.get('/api/store', db.getAllContent)

app.get('/api/store', function(req, res) {
  res.sendFile(__dirname + "/product-feed.csv")
});

app.listen(port, function () {
  console.log(' Example app listening on port 3000!');
});
