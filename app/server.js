const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');

const { PORT } = require('../config');

const router = require('./router');

const app = express();

app.use(bodyParser.json());
app.use('/', router);

app.listen(PORT, () => {
  console.log(chalk.green(`app listening on port ${PORT}!\n`));
});
