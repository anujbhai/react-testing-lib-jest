var express = require('express');
var router = express.Router();

const todos = [{id: 1, name: 'Do something', completed: false}];

/* GET todos listing. */
router.get('/', function(req, res, next) {
  res.json('respond with a resource');
});

module.exports = router;

