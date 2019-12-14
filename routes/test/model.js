const path = require('path');
const base = path.dirname(require.main.filename);
const User = require(base + '/database/models/TestModel');

// Test the Database Connections by getting all users
function testApi() {
  return User.findAll();
}

module.exports = {
  testApi
};
