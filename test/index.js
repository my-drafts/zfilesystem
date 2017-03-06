#!/usr/bin/env node

'use strict';

const assert = require('assert');
const zfs = require('../');

(function () {
  console.log(zfs.path(['x', '.', 'y.html'], {s:1, r:1}));
})();
