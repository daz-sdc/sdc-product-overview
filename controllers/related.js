const models = require('../models/index');

module.exports = async function getRelatedProducts(req, res, next) {
  const data = res.locals;
  data.id = req.params.product_id;
  const related = await models.getRelated(data.id);
  data.related = related.rows[0].array;
  res.status(200).send(related.rows[0].array);
  next();
};
