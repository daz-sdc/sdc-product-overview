-- ---
-- Table 'Products'
--
-- ---

DROP TABLE IF EXISTS products;

CREATE TABLE products (
  product_id SERIAL UNIQUE,
  name VARCHAR NULL DEFAULT NULL,
  slogan VARCHAR NULL DEFAULT NULL,
  description VARCHAR NULL DEFAULT NULL,
  category VARCHAR NULL DEFAULT NULL,
  default_price INTEGER NULL DEFAULT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP(2),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP(2),
  PRIMARY KEY (product_id)
);

-- ---
-- Table 'Features'
--
-- ---

DROP TABLE IF EXISTS features;

CREATE TABLE features (
  feature_id SERIAL UNIQUE,
  feature VARCHAR NULL DEFAULT NULL,
  "value" VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (feature_id)
);

-- ---
-- Table 'Product Features'
--
-- ---

DROP TABLE IF EXISTS product_features;

CREATE TABLE product_features (
  product_id INTEGER REFERENCES Products (product_id) ON UPDATE CASCADE ON DELETE CASCADE,
  feature_id INTEGER REFERENCES Features (feature_id) ON UPDATE CASCADE ON DELETE CASCADE,
  PRIMARY KEY (product_id, feature_id)
);

-- ---
-- Table 'Styles'
--
-- ---

DROP TABLE IF EXISTS styles;

CREATE TABLE styles (
  style_id SERIAL UNIQUE,
  name VARCHAR NULL DEFAULT NULL,
  original_price INTEGER NULL DEFAULT NULL,
  "default?" VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (style_id)
);

-- ---
-- Table 'Photos'
--
-- ---

DROP TABLE IF EXISTS styles_photos;

CREATE TABLE styles_photos (
  photo_id SERIAL UNIQUE,
  style_id INTEGER REFERENCES styles (style_id) NULL DEFAULT NULL,
  thumbnail_url VARCHAR NULL DEFAULT NULL,
  "url" VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (photo_id)
);

-- ---
-- Table 'Skus'
--
-- ---

DROP TABLE IF EXISTS styles_skus;

CREATE TABLE styles_skus (
  sku_id SERIAL UNIQUE,
  style_id INTEGER REFERENCES styles (style_id) NULL DEFAULT NULL,
  quantity INTEGER NULL DEFAULT NULL,
  size INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (sku_id)
);

-- ---
-- Table 'Product Styles'
--
-- ---

DROP TABLE IF EXISTS product_styles;

CREATE TABLE product_styles (
  product_id INTEGER REFERENCES products (product_id) ON UPDATE CASCADE ON DELETE CASCADE,
  style_id INTEGER REFERENCES styles (style_id) ON UPDATE CASCADE ON DELETE CASCADE,
  PRIMARY KEY (product_id)
);

-- ---
-- Table 'Related'
--
-- ---

DROP TABLE IF EXISTS related_products;

CREATE TABLE related_products (
  product_id INTEGER REFERENCES products (product_id) ON UPDATE CASCADE ON DELETE CASCADE,
  related_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (product_id)
);