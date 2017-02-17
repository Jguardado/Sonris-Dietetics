var promise = require('bluebird');

var options = {
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/sonris_dietetics'
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
