const express = require('express');
const userRouter = require('./user');
const bookRouter = require('./bookRouter');

const router = express.Router();

router.use('/users', userRouter);
router.use('/books', bookRouter);

module.exports = router;
