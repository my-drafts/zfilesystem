#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const process = require('process');

const path2flatList = function (pathElments) {
	if (pathElments instanceof Array) {
		const result = pathElments.map(function (pathElment) {
			return path2flatList(pathElment);
		});
		return [].concat.apply([], result);
	}
	else if (pathElments === String(pathElments)) {
		return [pathElments];
	}
	else {
		return [];
	}
}

module.exports = function (pathElments, options) {
	const root = process.cwd();
	if (pathElments.length > 0) {
		let p = path2flatList(pathElments);
		p = path.join.apply([], [root].concat(p));
		p = path.normalize(p);
		if (!options || (!options.safe && !options.s));
		else if (p.indexOf(root) !== 0) {
			throw new Error('zfs.path not safe');
		}
		if (options && (options.absolute || options.a));
		else if (options && (options.relative || options.r)) {
			return path.relative(root, p);
		}
		return p;
	}
	return root;
}
