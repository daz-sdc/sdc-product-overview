const models = require('../models/index');

module.exports = async function getProductInfo(req, res, next) {
  const data = res.locals;
  data.id = req.params.product_id;
  const product = await models.getDBProductFeatures(data.id);
  data.features = product.rows[0];
  res.status(200).send(product.rows[0]);
  next();
};
