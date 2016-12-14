const Promise = require('bluebird');
const redis = require('redis');

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

const redisClients = {
  samples: redis.createClient({url: process.env.REDIS_URL + '/' + process.env.SAMPLES_DB})
};

module.exports = {
  redisClients: redisClients
};
