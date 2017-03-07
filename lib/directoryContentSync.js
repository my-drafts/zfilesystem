#!/usr/bin/env node

'use strict';

const fs = require('fs');
const _path2join = require('./path2join');

module.exports = function (path, pathOptions, options) {
	if (path === String(path) && /^[\/]/.test(path));
	else {
		path = _path2join(path, pathOptions)
	}
	return fs.readdirSync(path, options);
}
