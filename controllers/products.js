module.exports = (req, res) => {
  const count = req.query.count || 5;
  const page = req.query.page || 1;
  res.status(200).send(`Products! Page: ${page}, Count: ${count}`);
};
