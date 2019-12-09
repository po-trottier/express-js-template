// Import sequelize
const sequelize = require('sequelize');
const mysql2 = require('mysql2');

// Setup DB
module.exports = new sequelize('potrot_studentassitant', 'potrot_usr', 'YfG$U7%2uSr1', {
  host: 'johnny.heliohost.org',
  dialect: 'mysql',
  dialectModule: mysql2,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});