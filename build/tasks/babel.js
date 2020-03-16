/* eslint-disable */

'use strict';

const babel = require('../modules/babel');

const src = process.env.npm_package_config_src + '/js';
const dest = process.env.npm_package_config_dist + '/js';

module.exports = options => {

	const file = options.file;

	if (file === 'tabs.js') {
		babel({
			src: `${src}/tabs.js`,
			dest: `${dest}/tabs.js`
		});
	}

};

/* eslint-enable */
