const Promise = require('bluebird');
const redis = require('redis');

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

let redisUrl = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
let redisDbSamples = process.env.SAMPLES_DB || '14';

const redisClients = {
  samples: redis.createClient({url: `${redisUrl}/${redisDbSamples}` })
};

module.exports = {
  redisClients: redisClients
};
