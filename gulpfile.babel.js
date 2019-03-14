"use strict";

import gulp from "gulp";
import haml from "gulp-haml";
import sass from "gulp-sass";
import terser from "gulp-terser";
import autoprefixer from "gulp-autoprefixer";
import imagemin from "gulp-imagemin";

gulp.task("haml", () => {
  return gulp
    .src("./*.haml")
    .pipe(haml())
    .pipe(gulp.dest("./"));
});

gulp.task("es", () => {
  return gulp
    .src("src/assets/js/**/*.js")
    .pipe(terser())
    .pipe(gulp.dest("./public/assets/js/"));
});

gulp.task("styles", () => {
  return gulp
    .src("src/assets/sass/**/*.scss")
    .pipe(autoprefixer())
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./public/assets/css/"));
});

gulp.task("images", () => {
  return gulp
    .src("src/assets/images/**")
    .pipe(imagemin())
    .pipe(gulp.dest("./public/assets/images/"));
});

//Watch task
gulp.task("default", () => {
  gulp.watch("./src/assets/sass/*.scss", gulp.series('styles'));
  gulp.watch("./src/assets/js/*.js", gulp.series('es'));
  gulp.watch("./*.haml", gulp.series('haml'));
});
