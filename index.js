'use strict';

const Express = require('express');
const winston = require('winston');
const hipsterIpsumHandlers = require('./src/route_handlers/hipster_ipsum');

let app = Express();
let port = process.env.PORT || 1337;
app.get('/hipster_ipsum', hipsterIpsumHandlers.getHipsterIpsum);

app.listen(port, () => {
  winston.info(`Express started on port ${port}`);
});