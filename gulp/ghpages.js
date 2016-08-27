'use strict';

var ghpages = require('gh-pages');
var path = require('path');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  // Deploy
  gulp.task('ghpages', function() { 
		return ghpages.publish(path.join(__dirname, 'build'), {
				branch: 'master',
				message: 'Auto-generated commit'
			},
			function(err) {
			}
		);
  });
};