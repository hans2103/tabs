/* eslint-disable */

'use strict';

const mkdirp = require('../modules/mkdirp');

const dest = process.env.npm_package_config_dist;

module.exports = options => {

  mkdirp({
    dir: `${dest}/css`
  });

  mkdirp({
    dir: `${dest}/js`
  });

};

/* eslint-enable */
