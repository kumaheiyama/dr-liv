var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var del = require('del');

gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload( {
            stream: true
        }));
});
gulp.task('js', function() {
    return gulp.src('src/**/*.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload( {
            stream: true
        }));
});
gulp.task('html', function() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload( {
            stream: true
        }));
});
gulp.task('img', function() {
    return gulp.src('src/images/**/*.png', { base: './src/images' })
        .pipe(gulp.dest('dist/images'));
});
gulp.task('clean', function() {
    return del.sync('dist');
})

gulp.task('build', ['clean', 'browserSync', 'img', 'sass', 'js', 'html'], function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.src('node_modules/lodash/lodash.min.js')
        .pipe(gulp.dest('dist/js'));
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
});