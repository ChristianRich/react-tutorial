const gulp = require('gulp')
    , nodemon = require('gulp-nodemon')
    , livereload = require('gulp-livereload');

gulp.task('serve', function() {

    const triggerLiveReload = function() {
        return livereload.changed({
            path: __dirname
        });
    };

    const options = {
        script: './index.js',
        ext: 'js html scss',
        ignore: ['**/app/build/**/*', '**/node_modules/**/*', '**/*.', '**/*.{,/**}'],
        //delay: '500',
        auto: false,
        env: {
            'NODE_ENV': 'development'
        }
    };

    livereload.listen();

    nodemon(options).on('restart', function() {
        //setTimeout(triggerLiveReload, 500);
        triggerLiveReload();
    });
});
