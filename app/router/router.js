const express = require('express');
const userRouter = require('./user');
const bookRouter = require('./bookRouter');
const historyRouter = require('./historyRouter');

const router = express.Router();

router.use('/users', userRouter);
router.use('/books', bookRouter);
router.use('/histories', historyRouter);

module.exports = router;
