const redis = require('redis');

const client = redis.createClient({ url: 'redis://redis_db:6379' });
// const client = redis.createClient();

client.on('error', (err) => console.log('Redis Client Error', err));
client.connect().catch((err) => console.log(err));

exports.cache = async (req, res) => {
  const data = res.locals;
  if (data.features) {
    await client.json.set(data.id, '$.features', data.features);
  } else if (data.styles) {
    await client.json.set(data.id, '$.styles', data.styles);
  } else if (data.related) {
    await client.json.set(data.id, '$.related', data.related);
  }
};

exports.getFeaturesCache = async (req, res, next) => {
  const id = req.params.product_id;
  const results = await client.json.get(id);

  if (!results) {
    await client.json.set(id, '$', {});
    next();
  }

  if (results?.features) {
    console.log('is cached');
    res.send(results.features);
  } else {
    next();
  }
};

exports.getStylesCache = async (req, res, next) => {
  const id = req.params.product_id;
  const results = await client.json.get(id, '.styles');

  if (!results) {
    await client.json.set(id, '$', {});
    next();
  }

  if (results?.styles) {
    console.log('is cached');
    res.send(results.styles);
  } else {
    next();
  }
};

exports.getRelatedCache = async (req, res, next) => {
  const id = req.params.product_id;
  const results = await client.json.get(id, '.features');

  if (!results) {
    await client.json.set(id, '$', {});
    next();
  }

  if (results?.related) {
    console.log('is cached');
    res.send(results.related);
  } else {
    next();
  }
};
