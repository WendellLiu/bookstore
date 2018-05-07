const express = require('express');
const userModel = require('../models/userModel');

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);

  userModel
    .createItem(req.body)
    .then(r => {
      console.log(r.dataValues);
      res.json(r.dataValues);
    })
    .catch(e => {
      console.log(e);
      res.send('error');
    });
});

module.exports = router;
