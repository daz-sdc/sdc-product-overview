module.exports = (req, res) => {
  const id = req.params.product_id;
  res.status(200).send(`Product Info for product id: ${id}!`);
};
