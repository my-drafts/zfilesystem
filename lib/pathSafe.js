#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const process = require('process');

module.exports = function () {
  return process.cwd();
}
