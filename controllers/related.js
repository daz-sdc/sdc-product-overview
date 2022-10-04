module.exports = (req, res) => {
  const id = req.params.product_id;
  res.status(200).send(`Related products for product id: ${id}!`);
};
