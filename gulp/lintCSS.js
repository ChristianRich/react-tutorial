const gulp = require('gulp')
    , csslint = require('gulp-csslint');

gulp.task('lint:css', function() {
    gulp.src('./app/public/css/*.css')
        .pipe(csslint())
        .pipe(csslint.reporter());
});
