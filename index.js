#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const process = require('process');
const _directoryContentSync = require('./lib/directoryContentSync.js');
const _path2join = require('./lib/path2join.js');
const _unlink = require('./lib/unlink');

module.exports.pwd = function() {
  return _path2join();
};
module.exports.dirSync = _directoryContentSync;
module.exports.path = _path2join;
module.exports.unlink = _unlink;
