var deploy = require("gulp-gh-pages");
var gulp = require('gulp');

/**
 * Push build to gh-pages
 */

gulp.task('deploy', function () {
  return gulp.src([".tmp/**/*.*", "app/CNAME"])
    .pipe(deploy())
});
