/*jshint node:true*/
'use strict';

/**
 * dependencies
 */
var path    = require('path');
var express = require('express');
var config  = require('./config');

/**
 * settings
 */
var app  = express();
var port = process.env.PORT || config.APP_PORT;
var server;

/**
 * setup application
 */
app.use(express.static(path.join(__dirname, config.DIST_PATH)));

/**
 * setup server
 */
server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('%s is up and running on http://%s/%s', config.APP_NAME, host, port);
});
