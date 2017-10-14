var gulp= require('gulp');
var sass= require('gulp-sass');
var livereload= require('gulp-livereload');
gulp.task('sass', function(){
    return gulp.src('css/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});
gulp.task('default', function () {
    gulp.start('sass');
});
gulp.task('watch',function(){
    livereload.listen();
    gulp.watch(['css/sass/*.scss'], ['sass']);
});

