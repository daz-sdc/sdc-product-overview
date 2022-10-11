const models = require('../models/index');

module.exports = async (req, res) => {
  const id = req.params.product_id;
  const related = await models.getRelated(id);

  res.status(200).send(related.rows[0].array);
};
