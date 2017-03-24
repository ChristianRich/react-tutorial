const gulp = require('gulp')
    , tinypng = require('gulp-tinypng');

gulp.task('tinypng', function () {
    gulp.src('./app/public/img/**/*.png')
        .pipe(tinypng('qBwKm3TRu4BZK5NzzD_qK7fqMQideDdM'))
        .pipe(gulp.dest('./app/build/img'));
});
