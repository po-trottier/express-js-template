const express = require('express');
const model = require("./model");

const router = express.Router();

router.get('/', (req,res) => {
  model.testApi().then((response) => {
  	res.send(response);
  });
});

module.exports = router;
