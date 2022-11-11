const models = require('../models/index');

module.exports = async function getProducts(req, res) {
  const count = Number(req.query.count) || 5;
  const page = Number(req.query.page) || 1;

  // protect against DB injection here

  const data = await models.getProducts(count, page);
  res.status(200).send(data.rows);
};
