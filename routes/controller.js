const express = require('express');
const path = require('path');
const router = express.Router();

router.use(
  // All the API Routes
  (req, res, next) => {
    router.use('/test', require('./test/controller'));
    next();
  },
  // Base URL sends the index.html file
  (req, res, next) => {
    router.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));
    next();
  }
);

module.exports = router;
