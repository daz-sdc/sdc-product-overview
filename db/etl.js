require('dotenv').config();
const db = require('./index');

const { DATA_PATH } = process.env;

const loadProducts = () => {
  const path = `${DATA_PATH}product.csv`;
  const text = `COPY products(id, name, slogan, description, category, default_price) FROM '${path}' DELIMITER ',' CSV HEADER`;

  db.query(text)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const loadFeatures = () => {
  const path = `${DATA_PATH}features.csv`;
  const text = `COPY product_features(feature_id, product_id, feature, value) FROM '${path}' DELIMITER ',' CSV HEADER`;

  db.query(text)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const loadStyles = () => {
  const path = `${DATA_PATH}styles.csv`;
  const text = `COPY product_styles(style_id, product_id, name, sale_price, original_price, "default?") FROM '${path}' DELIMITER ',' CSV HEADER`;

  db.query(text)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const loadPhotos = () => {
  const path = `${DATA_PATH}photos.csv`;
  const text = `COPY styles_photos(photo_id, style_id, url, thumbnail_url) FROM '${path}' DELIMITER ',' CSV HEADER`;

  db.query(text)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const loadSkus = () => {
  const path = `${DATA_PATH}skus.csv`;
  const text = `COPY styles_skus(sku_id, style_id, size, quantity) FROM '${path}' DELIMITER ',' CSV HEADER`;

  db.query(text)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const loadRelated = () => {
  const path = `${DATA_PATH}related.csv`;
  const text = `COPY related_products(relation_id, product_id, related_product_id) FROM '${path}' DELIMITER ',' CSV HEADER`;

  db.query(text)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

// loadProducts();
// loadFeatures();
// loadStyles();
// loadPhotos();
// loadSkus();
// loadRelated();
