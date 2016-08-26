'use strict';

var path = require('path');

module.exports = function(gulp, plugins, args, config, taskTarget, browserSync) {
  var dirs = config.directories;
  var dest = path.join(taskTarget);

  // // Copy
  // gulp.task('copy', function() {
  //   return gulp.src([
  //     path.join(dirs.source, '**/*'),
  //     '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}'),
  //     '!' + path.join(dirs.source, '**/*.nunjucks')
  //   ])
  //   .pipe(plugins.changed(dest))
  //   .pipe(gulp.dest(dest));
  // });

  // Icons
  gulp.task('icons', function() { 
    var gutil = require('gulp-util');
    return gulp.src(dirs.nodeModules + '/font-awesome/fonts/**.*') 
      .pipe(gulp.dest(dest + '/fonts')); 
  });
};