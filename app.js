'use strict';

// Import Dependencies
const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');
const db = require('./database/mysql');


// Get the Port Dynamically
const port = config.port || 3000;

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
