'use strict';

const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/mysql')

// Instantiate the Express App
const app = express();

// Netlify Lambda Setup
app.use('/.netlify/functions/server', require('./routes/controller'));
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

// Use Body Parser
app.use(bodyParser.json());

// Test DB Connection
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.error(err));

module.exports = app;
module.exports.handler = serverless(app);
