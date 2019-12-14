const sequelize = require('sequelize');
const db = require('../mysql.js');

const TestModel = db.define('test', {
  name: {
    type: sequelize.STRING
  },
  email: {
    type: sequelize.STRING
  },
});

module.exports = TestModel;
