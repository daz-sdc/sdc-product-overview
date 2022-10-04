-- ---
-- Table 'Products'
--
-- ---

DROP TABLE IF EXISTS products;

CREATE TABLE products (
  id SERIAL UNIQUE,
  name VARCHAR NULL DEFAULT NULL,
  slogan VARCHAR NULL DEFAULT NULL,
  description VARCHAR NULL DEFAULT NULL,
  category VARCHAR NULL DEFAULT NULL,
  default_price NUMERIC(10, 2) NULL DEFAULT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP(2),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP(2),
  PRIMARY KEY (id)
);

-- ---
-- Table 'product_features'
--
-- ---

DROP TABLE IF EXISTS product_features;

CREATE TABLE product_features (
  feature_id SERIAL UNIQUE,
  product_id INTEGER REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE,
  feature VARCHAR NULL DEFAULT NULL,
  "value" VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (feature_id)
);

-- ---
-- Table 'product_styles'
--
-- ---

DROP TABLE IF EXISTS product_styles;

CREATE TABLE product_styles (
  style_id SERIAL UNIQUE,
  product_id INTEGER REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE,
  "name" VARCHAR NULL DEFAULT NULL,
  sale_price VARCHAR NULL DEFAULT NULL,
  original_price INTEGER NULL DEFAULT NULL,
  "default?" INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (style_id)
);

-- ---
-- Table 'Photos'
--
-- ---

DROP TABLE IF EXISTS styles_photos;

CREATE TABLE styles_photos (
  photo_id SERIAL UNIQUE,
  style_id INTEGER REFERENCES product_styles (style_id) NULL DEFAULT NULL,
  "url" VARCHAR NULL DEFAULT NULL,
  thumbnail_url VARCHAR NULL DEFAULT NULL,
  PRIMARY KEY (photo_id)
);

-- ---
-- Table 'Skus'
--
-- ---

DROP TABLE IF EXISTS styles_skus;

CREATE TABLE styles_skus (
  sku_id SERIAL UNIQUE,
  style_id INTEGER REFERENCES product_styles (style_id) NULL DEFAULT NULL,
  size VARCHAR NULL DEFAULT NULL,
  quantity INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (sku_id)
);

-- ---
-- Table 'Related'
--
-- ---

DROP TABLE IF EXISTS related_products;

CREATE TABLE related_products (
  relation_id SERIAL UNIQUE,
  product_id INTEGER REFERENCES products (id) ON UPDATE CASCADE ON DELETE CASCADE,
  related_product_id INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (relation_id)
);