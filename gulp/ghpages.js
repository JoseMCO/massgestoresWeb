'use strict';

var ghPages = require('gulp-gh-pages');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
	var gulp = require('gulp');
 
  // Deploy
	gulp.task('ghpages', function() {
	  return gulp.src('./build/**/*')
	    .pipe(ghPages({
				branch: 'master',
				message: "Auto-generated commit [timestamp]"
	    }));
	});
};