#!/usr/bin/env node

'use strict';

const fs = require('fs');
const _path2join = require('./path2join');

module.exports = function (path, options) {
	return new Promise(function (resolve, reject) {
		if (path === String(path));
		else {
			path = _path2join(path, options)
		}
		fs.unlink(path, function (error) {
			error ? reject(error) : resolve(path);
		});
	});
}
