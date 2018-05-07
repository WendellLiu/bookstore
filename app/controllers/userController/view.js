const { prop, map } = require('ramda');

const userView = prop('dataValues');
const listUserView = map(userView);

module.exports = {
  userView,
  listUserView,
};
