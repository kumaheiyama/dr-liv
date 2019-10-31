var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var del = require('del');

gulp.task('sass', function() {
    return gulp.src(['src/scss/**/*.scss', 'src/scss/**/*.css'])
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});
gulp.task('sass_play', function() {
    return gulp.src(['src/scss/**/*.scss', 'src/scss/**/*.css'])
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.reload( {
            stream: true
        }));
});
gulp.task('js', function() {
    return gulp.src('src/script/**/*.js')
        .pipe(gulp.dest('dist/js'));
});
gulp.task('js_play', function() {
    return gulp.src('src/script/**/*.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload( {
            stream: true
        }));
});
gulp.task('html_play', function() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload( {
            stream: true
        }));
});
gulp.task('html', function() {
    return gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
});
gulp.task('img', function() {
    return gulp.src(['src/images/**/*.png', 'src/images/**/*.jpg', 'src/images/**/*.ico'], { base: './src/images' })
        .pipe(gulp.dest('dist/images'));
});
gulp.task('clean', function() {
    return del.sync('dist');
})

gulp.task('play', ['build', 'browserSync', 'js_play', 'html_play'], function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.src('node_modules/lodash/lodash.min.js')
        .pipe(gulp.dest('dist/js'));
});
gulp.task('build', ['clean', 'img', 'sass', 'js', 'html'], function() {
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