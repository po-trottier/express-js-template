var express = require('express');
var model = require("./model");

var router = express.Router();

router.get('/', (req,res) => {
  model.testApi().then((response) => {
  	res.send(response);
  });
});

module.exports = router;