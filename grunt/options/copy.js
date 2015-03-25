/*jshint node:true*/
'use strict';

/**
 * rename css file to scss
 */
function renameToScss(dest, src) {
  return [ dest, src.replace('.css', '.scss') ].join('/');
}

/**
 * public
 */
module.exports = {
  'bower-normalize-css' : {
    expand : true,
    cwd    : './bower_components/normalize-css',
    src    : '*.css',
    dest   : '<%= grunt._config.SRC_PATH %>/css/vendor',
    rename : renameToScss
  },

  js : {
    expand : true,
    cwd    : '<%= grunt._config.SRC_PATH %>/js',
    src    : 'vendor/*.js',
    dest   : '<%= grunt._config.DIST_PATH %>/js'
  },

  fonts : {
    expand : true,
    cwd    : '<%= grunt._config.SRC_PATH %>/font',
    src    : '*.{eot,woff2,woff,ttf,svg}',
    dest   : '<%= grunt._config.DIST_PATH %>/font'
  },

  images : {
    expand : true,
    cwd    : '<%= grunt._config.SRC_PATH %>/img',
    src    : '*.{jpg,png,gif,ico}',
    dest   : '<%= grunt._config.DIST_PATH %>/img'
  }
};
