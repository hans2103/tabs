/* eslint-disable */

'use strict';

const sass = require('../modules/sass');

const src = process.env.npm_package_config_src + '/scss';
const dest = process.env.npm_package_config_src + '/css';
const styleguide = process.env.npm_package_config_styleguide;

module.exports = options => {

    const file = options.file;

    sass({
        src: `${src}/tabs.scss`,
        dest: `${dest}/tabs.css`
    });

};

/* eslint-enable */
