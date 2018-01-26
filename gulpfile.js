'use strict'

var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();
var mqpacker = require('css-mqpacker');
var minify = require('gulp-csso');
var rename = require('gulp-rename');

var path = {
  build: {
    html: 'build/',
    css: 'build/css',
    js: 'build/js'
  },
  src: {
    html: 'src/*.html',
    css: 'src/less/style.less',
    js: 'src/js/*.js'
  },
  watch: {
    html: 'src/*.html',
    css: 'src/less/**/*.*',
    js: 'src/js/*.*'
  }
};

gulp.task('buildCss', function() {
  gulp.src(path.src.css)
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({
        browsers: [
          "last 3 versions"
        ]
      }),
      mqpacker({
        sort: true
      })
    ]))
    .pipe(gulp.dest(path.build.css))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest(path.build.css))
    .pipe(server.stream());
});

gulp.task('buildHtml', function() {
  gulp.src(path.src.html)
    .pipe(gulp.dest(path.build.html))
    .pipe(server.stream());
});

gulp.task('buildJs', function() {
  gulp.src(path.src.js)
    .pipe(gulp.dest(path.build.js))
    .pipe(server.stream());
});

gulp.task('build', [
    'buildCss',
    'buildHtml',
    'buildJs'
]);

gulp.task('serve', ['build'], function() {
  server.init({
    server: './build',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch(path.watch.css, ['buildCss']);
  gulp.watch(path.watch.html, ['buildHtml']);
  gulp.watch(path.watch.js, ['buildJs']);
});