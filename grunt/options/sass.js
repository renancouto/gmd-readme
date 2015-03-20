/*jshint node:true*/
'use strict';

/**
 * public
 */
module.exports = function () {
  return {
    options : {
      style     : 'expanded',
      quiet     : true,
      sourcemap : 'none',
      loadPath  : require('node-bourbon').includePaths
    },

    files : {
      expand : true,
      cwd    : '<%= grunt._config.SRC_PATH %>/css',
      src    : '*.sass',
      dest   : '<%= grunt._config.DIST_PATH %>/css',
      ext    : '.css'
    }
  };
};
