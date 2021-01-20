'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var rename = require("gulp-rename");
var del = require("del");

 
gulp.task("clean", () => {
  return del("markup/build");
});

gulp.task("copy", () => {
  return gulp.src([    
    "markup/pixel-glass/**"
    ], {
      base: "source"
    })
  .pipe(gulp.dest("markup/build"));
});

gulp.task("css", () => {
  return gulp.src("markup/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("markup/css"));
});

gulp.task("build", gulp.series(
  "clean",
  "copy",
  "css"
));

gulp.task("server", () => {
  server.init({
    server: "markup/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });
  gulp.watch("./markup/**/*.{scss,sass}", gulp.series("css", "refresh"));
});

gulp.task("refresh", done => {
  server.reload();
  done();
});

gulp.task("start", gulp.series("build", "server"));