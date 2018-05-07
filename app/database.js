const Sequelize = require('sequelize');
const {
  MYSQL_PORT,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = require('../config');

const options = {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: MYSQL_PORT,
  database: MYSQL_DATABASE,
  username: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  operatorsAliases: Sequelize.Op,
  pool: {
    max: 5,
    min: 0,
  },
};

const sequelize = new Sequelize(options);

module.exports = sequelize;
