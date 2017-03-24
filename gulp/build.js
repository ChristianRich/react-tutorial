const gulp = require('gulp')
    , runSequence = require('run-sequence').use(gulp)
    , del = require('del');

gulp.task('clean', function (callback) {
    del(['./app/build'], callback);
});

gulp.task('copy', function(){

    // http://stackoverflow.com/questions/12632029/grunt-minimatch-glob-folder-exclusion
    const exclude = [
        '!./app/public/bower_components{,/**}',
        '!./app/public/js/app{,/**}',
        '!./app/public/js/vendor{,/**}',
        '!./app/public/css/bourbon{,/**}',
        '!./app/public/css/**/*.scss'
    ];

    return gulp.src(['./app/public/**/*'].concat(exclude))
        .pipe(gulp.dest('./app/build'));
});

gulp.task('build', function(callback){
    runSequence('clean', ['lint:client', 'lint:server'], ['copy'], 'sass-compile', callback);
});

// gulp.task('build:prod', function(callback){
//     runSequence('clean', ['lint:client', 'lint:server'], ['copy'], 'browserify:prod', 'sass-compile:prod', 'clean:prod', callback);
// });
//
// gulp.task('clean:prod', function (callback) {
//     del(['./app/build/js/bundle.js', './app/build/css/style.css', './app/build/css/*.map'], callback);
// });
