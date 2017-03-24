const gulp = require('gulp')
    , sass = require('gulp-sass')
    , rename = require('gulp-rename');

gulp.task('sass-compile', function(){

    gulp.src(['./app/public/css/style.scss', './app/public/css/initFonts.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'nested'}))
        .pipe(gulp.dest('./app/build/css'));
});

gulp.task('sass-compile:prod', function(){

    gulp.src(['./app/public/css/style.scss', './app/public/css/initFonts.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./app/build/css'));
});
