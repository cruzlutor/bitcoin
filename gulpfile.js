/* jslint node: true */

'use strict';
var requireDir = require('require-dir');

require('browser-sync').create('server');
requireDir('./gulp', { recurse: true });