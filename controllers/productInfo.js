const models = require('../models/index');

module.exports = async (req, res) => {
  const id = req.params.product_id;

  const product = await models.getProduct(id);
  const features = await models.getFeatures(id);
  product.rows[0].features = features.rows;

  res.status(200).send(product.rows[0]);
};
