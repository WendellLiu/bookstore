const userModel = require('../../models/userModel');
const { userView, listUserView } = require('./view');

const postUser = (req, res) => {
  userModel
    .createItem(req.body)
    .then(r => {
      res.json(userView(r));
    })
    .catch(e => {
      console.log(e);
      throw e;
    });
};

const getUsers = (req, res) => {
  userModel
    .getItems()
    .then(r => {
      res.json(listUserView(r));
    })
    .catch(e => {
      console.log(e);
      throw e;
    });
};

const deleteUser = (req, res) => {
  const { userId } = req.params;
  userModel
    .deleteItem(userId)
    .then(r => {
      res.send('success');
    })
    .catch(e => {
      console.log(e);
      throw e;
    });
};

module.exports = {
  postUser,
  getUsers,
  deleteUser,
};
