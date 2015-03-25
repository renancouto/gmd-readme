/*jshint node:true*/
'use strict';

/**
 * public
 */
module.exports = function (grunt) {
  // Single purpose (part of a bundle)
  grunt.registerTask('html', [ 'jade' ]);
  grunt.registerTask('css', [ 'sass', 'newer:autoprefixer', 'newer:cmq' ]);
  grunt.registerTask('js', [ 'newer:jshint', 'browserify' ]);
  grunt.registerTask('img', [ 'copy:images' ]);
  grunt.registerTask('server', [ 'express', 'open', 'watch' ]);

  // Bundle (groups of singles)
  grunt.registerTask('build', [ 'clean:dist', 'env:build', 'concurrent:assets', 'concurrent:minify' ]);
  grunt.registerTask('precommit', [ 'build', 'notify:postCommit' ]);
  grunt.registerTask('default', [ 'env:dev', 'concurrent:clean', 'concurrent:assets', 'server' ]);

  // Standalone (started manually by the user)
  grunt.registerTask('bower', [ 'clean:vendor', 'bower-install-simple:dev', 'concurrent:bower-copy' ]);
  grunt.registerTask('images', [ 'newer:imagemin', 'newer:svgmin' ]);
};
