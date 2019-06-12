/* eslint-disable */

'use strict';

/**
 * Used to babel Javascript files
 */

const fs = require('fs');
const babel = require('@babel/core');
const mkdirp = require('mkdirp');
const getDirName = require('path').dirname;

let result;

module.exports = options => {

  const src = options.src;
  const dest = options.dest;

  const code = fs.readFileSync(src)
    .toString();

  try {
    result = babel.transform(code,
      {
        'presets': [[
          'minify', { builtIns: false }
        ]],
        'comments': false
      }
    );
  } catch (e) {
    console.log('\x1b[31m', e, '\x1b[0m');
    return;
  }

  console.time(' Built ' + dest);

  mkdirp(getDirName(dest), err => {
    if (err) {
      return cb(err);
    }
    fs.writeFile(dest, result.code, (err) => {
      if (err) {
        throw err;
      }
    });
  });

  console.timeEnd(' Built ' + dest);

};

/* eslint-enable */
