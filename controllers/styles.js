const models = require('../models/index');

module.exports = async (req, res) => {
  const id = req.params.product_id;

  const styles = await models.getStyles(id);

  res.status(200).send(styles.rows);
};
