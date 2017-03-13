var gulp = require('gulp');

var browserSync = require("browser-sync").create();
var gutil = require('gulp-util');

var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var cleanCss = require('gulp-clean-css');
var rev = require('gulp-rev');
var del = require('del');

var src  = 'app';
var dist = 'dist';

var paths = {
  app : src + '/**',
  js: src + '/**/*.js',
  css: src + '/**/*.css',
  scss: src + '/scss/*.scss',
  html: src + '/**/*.html'
};

gulp.task('hello', function(){
  console.log('hello');
});

gulp.task('scripts', function(){
  console.log('hello world');
  gulp.src('app/**/*.js')
    .pipe( uglify() )
    .pipe( gulp.dest('build/js') );
});

gulp.task('usemin', function() {
  return gulp.src( paths.html )
    .pipe(usemin({
      css: [ rev(), cleanCss(), 'concat' ],
      html: [ function () {return htmlmin({ collapseWhitespace: true });} ],
      js: [ uglify(), rev(), 'concat' ],
      inlinejs: [ uglify(), 'concat' ],
      inlinecss: [ cleanCss(), 'concat' ]
    }))
    .pipe(gulp.dest(dist + '/'));
});

gulp.task('clean', function(){
  return del('dist/**', {force:true})
});

gulp.task('watch', function(){
  gulp.watch( paths.app, ['usemin']);

});

gulp.task('server', function () {
  browserSync.init({
    server: dist + '/'
  });

  // gulp.watch("app/scss/*.scss", ['sass']);
  // gulp.watch( paths.app, ['usemin'] );
  gulp.watch( paths.app ).on('change', browserSync.reload);
});


gulp.task('default', ['usemin','server','watch']);
