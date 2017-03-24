const gulp = require('gulp')
    , jshint = require('gulp-jshint');

gulp.task('lint:client', function(){

    const options = {
        laxcomma: true,
        asi: true
    };

    return gulp.src('./app/public/js/app/**/*.js')
        .pipe(jshint(options))
        .pipe(jshint.reporter('default'));
});
