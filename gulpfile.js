var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');


gulp.task('watch', function(){
    browserSync({
        server: {
            baseDir: '/'
        }
    })
    gulp.watch('./sass/*.scss', ['sass-watch']);
});

gulp.task('sass', function() {
    return gulp.src('./sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'))
});

gulp.task('sass-watch', ['sass'], browserSync.reload)

