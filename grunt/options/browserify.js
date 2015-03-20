/*jshint node:true*/
'use strict';

/**
 * public
 */
module.exports = function () {
  return {
    files : {
      expand : true,
      cwd    : '<%= grunt._config.SRC_PATH %>/js',
      src    : 'app/*.js',
      dest   : '<%= grunt._config.DIST_PATH %>/js'
    }
  };
};
