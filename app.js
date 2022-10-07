const express = require('express');
const router = require('./routes');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Product Overview SDC');
});

app.use(router);

module.exports = app;
