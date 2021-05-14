const gulp = require('gulp')

const sass = require('gulp-sass')
const plumber = require('gulp-plumber');

gulp.task('sass', () => {
    return gulp
        .src('./scss/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('../css'))
})

gulp.task('watch', () => {
    gulp.watch('./scss/*.scss', gulp.series('sass'))
})

gulp.task('default', gulp.series('sass', 'watch'))