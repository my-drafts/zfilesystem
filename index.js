#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const process = require('process');
const _path = require('./lib/path.js');
const _unlink = require('./lib/unlink');

module.exports.pwd = function() {
  return _path();
};
module.exports.path = _path;
module.exports.unlink = _unlink;
