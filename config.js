const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  databaseHost: process.env.DATABASE_HOST,
  databaseName: process.env.DATABASE_NAME,
  databaseUser: process.env.DATABASE_USER,
  databasePass: process.env.DATABASE_PASS,
};
