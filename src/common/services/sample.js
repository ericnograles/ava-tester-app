'use strict';

const Promise = require('bluebird');
const request = require('request');

module.exports = {
  getHipsterIpsum
};

function getHipsterIpsum() {
  return new Promise(
    (resolve, reject) => {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      };

      request('http://hipsterjesus.com/api', options, (error, response, body) => {
        if (error || response.statusCode !== 200) {
          return reject(error || { error: 'OH NOES' });
        }
        resolve(JSON.parse(body));
      });
    }
  );
}
