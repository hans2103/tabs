/* eslint-disable */

'use strict';

/**
 * Copy a file/directory from one location to another
 */

const fs = require('fs-extra');

module.exports = options => {

  const src = options.src;
  const dest = options.dest;


  fs.copy(src, dest, err => {
    if (err) {
      return console.error(err);
    }

    console.log(' Copied ' + src + ' to ' + dest);
  });

};

/* eslint-enable */
