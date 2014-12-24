var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');


gulp.task('move', function() {
    gulp
    .src(['index.html', 'package.json'])
    .pipe(gulp.dest('build'))
});


gulp.task('browserify', function () {
    return browserify('./index.js')
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('build'))
});

gulp.task('watch', function() {
    gulp.watch(['components/*.js', 'methods/*.js'], ['browserify']);
});

gulp.task('default', ['move', 'browserify', 'watch']);




