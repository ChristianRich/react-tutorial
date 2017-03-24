const gulp = require('gulp')
    , jshint = require('gulp-jshint');

gulp.task('lint:server', function(){

    const options = {
        laxcomma: true,
        asi: true,
        esversion: 6
    };

    return gulp.src(['./app/**/*.js', '!./app/public{,/**}', '!./app/build{,/**}'])
        .pipe(jshint(options))
        .pipe(jshint.reporter('default'));
});
