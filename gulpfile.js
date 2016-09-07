'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
    return gulp.src('styles/main.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('web/css'));
});


gulp.task('assets', function () {
    return gulp.src('assets/**/*.*')
        .pipe(gulp.dest('web'));
});

gulp.task('default', ['styles', 'assets']);