var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');


gulp.task('watch', function(){
    browserSync({
        server: {
            baseDir: 'app/'
        }
    })
    gulp.watch('./app/sass/*.scss', ['sass-watch']);
});

gulp.task('sass', function() {
    return gulp.src('./app/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css'))
});

gulp.task('sass-watch', ['sass'], browserSync.reload)

