const gulp = require('gulp')
    , requireDir = require('require-dir')('./gulp')
    , runSequence = require('run-sequence').use(gulp);

gulp.task('default', function(callback){
    runSequence('build', 'serve', 'watch', callback);
});
