var gulp = require("gulp");
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('html', function buildHTML() {
  return gulp.src('resources/pug/!(_)*.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('public'));
});
 
gulp.task('css', function () {
  return gulp.src('resources/sass/!(_)*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
});