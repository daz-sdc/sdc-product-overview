const models = require('../models/index');

module.exports = async (req, res) => {
  const id = req.params.product_id;
  const styles = await models.getStyles(id);
  await Promise.all(styles.rows.map(async (style) => {
    const photo = await models.getPhotos(style.style_id);
    style.photos = photo.rows;
    const sku = await models.getSkus(style.style_id);
    style.skus = {};
    sku.rows.forEach((skuId) => {
      style.skus[skuId.sku_id] = {
        quantity: skuId.quantity,
        size: skuId.size,
      };
    });
  }));

  const output = {
    product_id: id,
    results: styles.rows,
  };

  res.status(200).send(output);
};
