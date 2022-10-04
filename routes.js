const router = require('express').Router();
const controllers = require('./controllers/index');

router.get('/products', controllers.products);
router.get('/products/:product_id', controllers.productInfo);
router.get('/products/:product_id/styles', controllers.styles);
router.get('/products/:product_id/related', controllers.related);

module.exports = router;
