/* eslint-disable */

'use strict';

const copy = require('../modules/copy');
const symlink = require('../modules/symlink');
const clean = require('../tasks/clean');
const mkdirp = require('../tasks/mkdirp');
const sass = require('../tasks/sass');
const postcss = require('../tasks/postcss');
const babel = require('../tasks/babel');

const currentPath = process.cwd();

// prebuild
symlink({
    src: `../../hooks/pre-commit`,
    dest: `${currentPath}/.git/hooks/pre-commit`
});

// Phpcs config
copy({
    src: `hooks/CodeSniffer.conf.dist`,
    dest: `hooks/CodeSniffer.conf`
});

// clean and create
clean();
mkdirp();

// css
sass({file: 'tabs.scss'});
setTimeout(() => {
    postcss({file: 'tabs.css'});
}, 80);

// js
babel({file: 'tabs.concat.js'});

/* eslint-enable */
