const express = require('express');
const parser = require('body-parser');
const path = require('path');
const { router } = require('./router');
require('../db/config');

const app = express();

const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, '../static')));
app.use('/api', router);

app.listen(port, () => {
  console.log('server listening on port ', port);
})