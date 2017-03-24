const gulp = require('gulp')
    , runSequence = require('run-sequence').use(gulp);

gulp.task('watch:browserify', function(){
    gulp.watch('./app/public/js/app/**/*.js', ['reload-js']);
});

gulp.task('watch:sass', function(){
    gulp.watch('./app/public/css/**/*.scss', ['sass-compile']);
});

gulp.task('watch:server', function(){
    gulp.watch(['./app.js', './app/**/*.js', '!./app/public',  '!./app/build'], ['reload-server']);
});

gulp.task('watch', [
    'watch:browserify',
    'watch:sass',
    'watch:server'
]);

gulp.task('reload-js', function(callback){
    runSequence(['lint:client'], 'browserify', callback);
});

gulp.task('reload-server', function(callback){
    runSequence(['lint:server'], callback);
});
