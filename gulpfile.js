var gulp        = require('gulp');
var babel       = require('babelify');
var watch       = require('gulp-watch');
var rename      = require('gulp-rename');
var uglify      = require('gulp-uglify');
var notify      = require("gulp-notify");
var browserify  = require('gulp-browserify');
var sourcemaps  = require('gulp-sourcemaps');


/************************************************************
 *
 * Task: scripts
 *
 ************************************************************/
gulp.task('scripts', function() {
    return gulp.src('./src/index.js')
        .pipe(sourcemaps.init())
        .pipe(browserify({ transform: [babel] }))
        .pipe(uglify())
        .pipe(rename('country.min.js'))
        .pipe(sourcemaps.write())
        .pipe(notify("Build completed"))
        .pipe(gulp.dest('./dist'));
});


/************************************************************
 *
 * Task: watch
 *
 ************************************************************/
gulp.task('watch', function() {
    gulp.watch('src/**/*.js', ['scripts']);
});


/************************************************************
 *
 * Task: default
 *
 ************************************************************/
gulp.task('default', ['watch', 'scripts']);