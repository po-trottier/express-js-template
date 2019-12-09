const sequelize = require('sequelize');
const db = require('../mysql.js');

const User = db.define('user', {
  name: {
    type: sequelize.STRING
  },
  email: {
    type: sequelize.STRING
  },
  picture: {
    type: sequelize.STRING
  },
});

module.exports = User;