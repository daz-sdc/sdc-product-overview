const models = require('../models/index');

module.exports = async function getProductStyles(req, res, next) {
  const data = res.locals;
  data.id = req.params.product_id;
  const styles = await models.getStyles(data.id);
  const output = {
    product_id: data.id,
    results: styles.rows,
  };
  data.styles = output;
  res.status(200).send(output);
  next();
};
