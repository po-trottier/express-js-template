// Import sequelize
const sequelize = require('sequelize');
const mysql2 = require('mysql2');

// Import the environment variables
const config = require('../config');

// Setup DB
module.exports = new sequelize(config.databaseName, config.databaseUser, config.databasePass, {
  host: config.databaseHost,
  dialect: 'mysql',
  dialectModule: mysql2,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
