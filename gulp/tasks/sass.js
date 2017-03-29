const gulp = require('gulp');
const sass = require('gulp-sass');
const bs = require('browser-sync').get('server');


gulp.task('sass', function () {
    return gulp.src('./src/css/main.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css/'))
        .pipe(bs.stream());
});