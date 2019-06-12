/* eslint-disable */

'use strict';

const sass = require('../modules/sass');

const src = process.env.npm_package_config_src + '/scss';
const dest = process.env.npm_package_config_src + '/css';

module.exports = options => {

  const file = options.file;

  if(file === 'tabs.scss') {
    sass({
      src: `${src}/tabs.scss`,
      dest: `${dest}/tabs.css`
    });
  }

};

/* eslint-enable */
