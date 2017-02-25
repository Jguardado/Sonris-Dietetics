var express = require('express');
var path = require('path');
var app = express();
var csv = require('express-csv')
var db = require('./db.js');

var port = process.env.PORT || '3000';


app.get('/',function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/api/store', function(req, res) {
  res.sendFile(__dirname + "/product-feed.csv")
});

// app.get('/api/store', db.getAllContent)

/* [Routes for images] */

app.get('/api/pics/select-vegan-protien', function(req, res) {
  res.sendFile(__dirname + "/assests/products/PES-select-vegan-protien.jpg")
})

app.get('/api/pics/pandy-protein-candy-salty-kettlebells', function(req, res) {
  res.sendFile(__dirname + "/assests/products/pandy-protein-candy-salty-kettlebells.jpg")
});

app.get('/api/pics/muscletech-100-platinum-casein', function(req, res) {
  res.sendFile(__dirname + "/assests/products/muscletech-100-platinum-casein.jpg")
});

app.get("/api/pics/muscletech-100-premium-whey-protein", function(req, res) {
  res.sendFile(__dirname + "/assests/products/muscletech-100-premium-whey-protein.jpg")
});

app.get("/api/pics/nitrotech-performance-series-2lbs", function(req, res) {
  res.sendFile(__dirname + "/assests/products/nitrotech-performance-series-2lbs.jpg")
});

app.get("/api/pics/pandy-protein-candy-soda-shaker", function(req, res) {
  res.sendFile(__dirname + "/assests/products/pandy-protein-candy-soda-shaker.jpg")
});

app.get("/api/pics/pandy-protein-candy-sour-plates", function(req, res) {
  res.sendFile(__dirname + "/assests/products/pandy-protein-candy-sour-plates.jpg")
});

app.get("/api/pics/inspired-100-plant-based-protein", function(req, res) {
  res.sendFile(__dirname + "/assests/products/inspired-100-plant-based-protein.jpg")
});

app.get("/api/pics/musclepharm-combat-powder", function(req, res) {
  res.sendFile(__dirname + "/assests/products/musclepharm-combat-powder.jpg")
});

app.get("/api/pics/creatine", function(req, res) {
  res.sendFile(__dirname + "/assests/products/creatine.jpg")
});

app.get("/api/pics/bpi-best-bcaa", function(req, res) {
  res.sendFile(__dirname + "/assests/products/bpi-best-bcaa.jpg")
});

app.get("/api/pics/fitmiss-delight-protein", function(req, res) {
  res.sendFile(__dirname + "/assests/products/fitmiss-delight-protein.jpg")
});

app.get("/api/pics/musclepharm-bcaa", function(req, res) {
  res.sendFile(__dirname + "/assests/products/musclepharm-bcaa.jpg")
});

app.get("/api/pics/muscle-tech-amino-build", function(req, res) {
  res.sendFile(__dirname + "/assests/products/muscle-tech-amino-build.jpg")
});

app.get("/api/pics/muscletech-platinum-micronised-creatine", function(req, res) {
  res.sendFile(__dirname + "/assests/products/muscletech-platinum-micronised-creatine.jpg")
});

app.get("/api/pics/ad-micronised-creatine", function(req, res) {
  res.sendFile(__dirname + "/assests/products/ad-micronised-creatine.jpg")
});

app.get("/api/pics/bpi-best-creatine", function(req, res) {
  res.sendFile(__dirname + "/assests/products/bpi-best-creatine.jpg")
});

app.get("/api/pics/muscle-pharm-creatine", function(req, res) {
  res.sendFile(__dirname + "/assests/products/muscle-pharm-creatine.jpg")
});

app.get("/api/pics/muchtech-creactor", function(req, res) {
  res.sendFile(__dirname + "/assests/products/muchtech-creactor.jpg")
});

app.get("/api/pics/muscletech-hydroxycut-caffeine-free", function(req, res) {
  res.sendFile(__dirname + "/assests/products/muscletech-hydroxycut-caffeine-free.jpg")
});

app.get("/api/pics/stronggirl-smart-weightloss", function(req, res) {
  res.sendFile(__dirname + "/assests/products/stronggirl-smart-weightloss.jpg")
});

app.get("/api/pics/pes-norcodrene", function(req, res) {
  res.sendFile(__dirname + "/assests/products/pes-norcodrene.png")
});

app.get("/api/pics/fitmiss-tone", function(req, res) {
  res.sendFile(__dirname + "/assests/products/fitmiss-tone.jpg")
});

app.get("/api/pics/dedicated-nutrition-unstoppable", function(req, res) {
  res.sendFile(__dirname + "/assests/products/dedicated-nutrition-unstoppable.jpg")
});

app.get("/api/pics/no-xplode-3-0-12-servings", function(req, res) {
  res.sendFile(__dirname + "/assests/products/no-xplode-3-0-12-servings.jpg")
});

app.get("/api/pics/the-curse", function(req, res) {
  res.sendFile(__dirname + "/assests/products/the-curse.jpg")
});

app.get("/api/pics/stronggirl-pre-workout", function(req, res) {
  res.sendFile(__dirname + "/assests/products/stronggirl-pre-workout.jpg")
});

app.get("/api/pics/hyde-v3-pf", function(req, res) {
  res.sendFile(__dirname + "/assests/products/hyde-v3-pf.png")
});

app.get("/api/pics/cellucor-c4", function(req, res) {
  res.sendFile(__dirname + "/assests/products/cellucor-c4.jpeg")
});

app.get("/api/pics/fitmiss-balance-120-capsules", function(req, res) {
  res.sendFile(__dirname + "/assests/products/fitmiss-balance-120-capsules.jpg")
});

app.get("/api/pics/muscle-pharm-core-series-fish-oil", function(req, res) {
  res.sendFile(__dirname + "/assests/products/muscle-pharm-core-series-fish-oil.jpg")
});

app.get("/api/pics/muscletech-platinum-multi-vitamin", function(req, res) {
  res.sendFile(__dirname + "/assests/products/muscletech-platinum-multi-vitamin.jpg")
});

app.get("/api/pics/mutant-creakong-300g", function(req, res) {
  res.sendFile(__dirname + "/assests/products/mutant-creakong-300g.jpeg")
});


// SAMPLE
// app.get("/api/pics/", function(req, res) {
//   res.sendFile(__dirname + "/assests/products/")
// });



/* Listening PORT */

app.listen(port, function () {
  console.log(' Example app listening on port 3000!');
});
