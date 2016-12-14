const redisService = require('../common/services/redis');
const sampleService = require('../common/services/sample');

module.exports = {
  getHipsterIpsum
};

function getHipsterIpsum(req, res) {
  let returnResponse = {};
  sampleService.getHipsterIpsum()
    .then(response => {
      returnResponse = response;
      return redisService.redisClients.samples.hsetAsync('SAMPLE', JSON.stringify(response));
    })
    .then(() => {
      res.status(200).send(returnResponse);
    })
    .catch(error => {
      res.status(500).send(error);
  });
}