var express = require('express');
var router = express.Router();

// Set Content-Type for all responses for all routes
router.use((req, res, next) => {
  res.set('Content-Type', 'application/json');
  next();
}, (req, res, next) => {
  // All routes
  router.use('/test', require('./test/controller'));
  // Base URL
  router.use('/', (req, res) => res.send('API is working...'));
  next();
});

module.exports = router;