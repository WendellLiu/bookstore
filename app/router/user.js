const express = require('express');
const userModel = require('../models/userModel');

const router = express.Router();

router.post('/', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
