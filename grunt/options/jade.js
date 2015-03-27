/*jshint node:true*/
'use strict';

/**
 * public
 */
module.exports = function (grunt) {
  return {
    compile : {
      options : {
        data : {
          config : grunt._config,
          data   : grunt._data,
          settings : {
            env         : process.env.NODE_ENV,
            analyticsId : process.env.ANALYTICS_ID,
            buildId     : process.env.CI_BUILD_NUMBER || 'local-build',
            buildUrl    : process.env.CI_BUILD_URL || '#local-build',
            buildDate   : Date.now()
          }
        }
      },

      expand  : true,
      flatten : true,
      cwd     : '<%= grunt._config.SRC_PATH %>/html/',
      src     : [ '*.jade' ],
      dest    : '<%= grunt._config.DIST_PATH %>',
      ext     : '.html'
    }
  };
};
