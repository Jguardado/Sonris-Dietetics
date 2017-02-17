var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
// var connectionString = 'postgres://localhost:5432/sonris_dietetics';
var connectionString = "postgres://idhzyrhlxzmoln:11c106d837f2df7b337789ca18bf15a584e3bce8de63256cd69cf281b18275c1@ec2-54-235-240-92.compute-1.amazonaws.com:5432/d22d8rba2gvl0t"
var db = pgp(connectionString);

console.log("db: ", db);

function getAllContent(req, res, next) {
  console.log("getAllContent being called");
  db.any('select * from product_feed')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL content'
        });
    })
    .catch(function (err) {
      console.log("theres a problem");
      return next(err);
    });
}

module.exports = {
  getAllContent: getAllContent,
};
