var gulp = require('gulp');
var sass = require('gulp-sass');
var uncss = require('gulp-uncss');

var filename = "13_Nov_2014"; //to update
var path = '../2014/';

gulp.task('sass', function () {
    gulp.src('scss/'+ filename +'.scss')
        .pipe(sass({
        	errLogToConsole: true
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('uncss', function() {

  var ignoreList = Array(
      '#outlook a'
  );

   return gulp.src('css/'+ filename +'.css')
        .pipe(uncss({
            html: [path+filename+'.html'],
            timeout: 2000,
            ignore: ignoreList
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
 
  gulp.watch('scss/'+filename+'.scss', ['sass']);
  gulp.watch('css/'+filename+'.css', ['uncss']);
  gulp.watch(path+filename+'.html', ['sass']);
 
});

gulp.task('default', ['sass', 'uncss']);
