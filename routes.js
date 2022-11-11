const router = require('express').Router();
const redis = require('./db/redis');

const controllers = require('./controllers/index');

router.get('/loaderio-43f7bfd678caf7dac881eb732a90f545', (req, res) => {
  res.send('loaderio-43f7bfd678caf7dac881eb732a90f545');
});

router.get('/products', controllers.products);
router.get('/products/:product_id', redis.getFeaturesCache, controllers.productInfo);
router.get('/products/:product_id/styles', redis.getStylesCache, controllers.styles);
router.get('/products/:product_id/related', redis.getRelatedCache, controllers.related);
router.use('*', redis.cache);

module.exports = router;
