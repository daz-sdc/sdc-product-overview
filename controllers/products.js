const models = require('../models/index');

module.exports = async (req, res) => {
  const page = req.query.page || 1;
  const count = req.query.count || 5;
  const data = await models.products(page, count);
  res.status(200).send(data.rows);
};
