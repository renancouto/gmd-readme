/*jshint node:true*/
'use strict';

/**
 * settings
 */
var config = require('./config');

/**
 * public
 */
module.exports = function (grunt) {
  // settings
  grunt._config = config;
  grunt._data   = {};

  // dependencies
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
};
