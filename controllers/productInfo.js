const models = require('../models/index');

module.exports = async (req, res) => {
  const id = req.params.product_id;

  const product = await models.getProduct(id);
  const features = await models.getFeatures(id);

  res.status(200).send(product.rows[0]);
};
