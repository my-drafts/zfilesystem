#!/usr/bin/env node

'use strict';

const process = require('process');

module.exports = function () {
	return process.cwd();
};
