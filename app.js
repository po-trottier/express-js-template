'use strict';

// Import Depdendencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database/mysql');

const port = process.env.PORT || 3000;

// Instantiate the Express App
const app = express();

//Routes Setup
app.use('/', require('./routes/controller'));

// Use Body Parser
app.use(bodyParser.json());

// Test DB Connection
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((err) => console.error(err));

// Listen for Requests
app.listen(port, () => console.log(`API listening on port ${port}...`));
