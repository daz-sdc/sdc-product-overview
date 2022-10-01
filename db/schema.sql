-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

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
  created_at TIMESTAMP NULL DEFAULT NULL,
  updated_at TIMESTAMP NULL DEFAULT NULL,
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

DROP TABLE IF EXISTS photos;

CREATE TABLE photos (
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

DROP TABLE IF EXISTS skus;

CREATE TABLE skus (
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

-- ---
-- Foreign Keys
-- ---

ALTER TABLE Products ADD FOREIGN KEY (product_id) REFERENCES Product Features (product_id);
ALTER TABLE Products ADD FOREIGN KEY (product_id) REFERENCES Product Features (product_id);
ALTER TABLE Products ADD FOREIGN KEY (product_id) REFERENCES Product Styles (product_id);
ALTER TABLE Product Features ADD FOREIGN KEY (feature_id) REFERENCES Features (feature_id);
ALTER TABLE Photos ADD FOREIGN KEY (style_id) REFERENCES Styles (style_id);
ALTER TABLE Skus ADD FOREIGN KEY (style_id) REFERENCES Styles (style_id);
ALTER TABLE Product Styles ADD FOREIGN KEY (style_id) REFERENCES Styles (style_id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE Products ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Features ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Product Features ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Styles ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Photos ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Skus ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE Product Styles ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO Products (product_id,name,slogan,description,category,default_price,created_at,updated_at) VALUES
-- ('','','','','','','','');
-- INSERT INTO Features (feature_id,feature,value) VALUES
-- ('','','');
-- INSERT INTO Product Features (product_id,feature_id) VALUES
-- ('','');
-- INSERT INTO Styles (style_id,name,original_price,default) VALUES
-- ('','','','');
-- INSERT INTO Photos (id,style_id,thumbnail_url,url) VALUES
-- ('','','','');
-- INSERT INTO Skus (id,style_id,sku,quantity,size) VALUES
-- ('','','','','');
-- INSERT INTO Product Styles (product_id,style_id) VALUES
-- ('','');