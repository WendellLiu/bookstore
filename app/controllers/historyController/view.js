const { prop, map } = require('ramda');

const userViewResp = prop('dataValues');
const listUserViewResp = map(userViewResp);

module.exports = {
  getUserViewResp: userViewResp,
  getListUserViewResp: listUserViewResp,
};
