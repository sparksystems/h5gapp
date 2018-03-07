var gulp = require("gulp");
var browserSync = require("browser-sync").create();

gulp.task("serve", function () {
  browserSync.init({
    server: {
      baseDir: "./www"
    }
  });
});

gulp.task("watch", function () {
  gulp.watch("./src/index.html", ["html", "reload"]);
  gulp.watch("./src/css/**/*.css", ["css", "reload"]);
  gulp.watch("./src/js/**/*.js", ["js", "reload"]);
  gulp.watch("./src/img/**/*.*", ["imgs", "reload"]);
});

gulp.task("reload", function () {
  browserSync.reload();
});

var libRoot = "./lib";

gulp.task("copy", function () {
  gulp.src("./favicon.ico").pipe(gulp.dest("./www"));
});

gulp.task("html", function () {
  gulp.src("./src/index.html").pipe(gulp.dest("./www"));
});

gulp.task("css", function () {
  gulp.src("./src/css/**/*.css").pipe(gulp.dest("./www/css"));
});

gulp.task("js", function () {
  gulp.src("./src/js/**/*.js").pipe(gulp.dest("./www/js"));
});

gulp.task("imgs", function () {
  gulp.src([
    "./src/img/**/*.gif",
    "./src/img/**/*.jpg",
    "./src/img/**/*.jpeg",
    "./src/img/**/*.png"
  ]).pipe(gulp.dest("./www/img"));
});

gulp.task("default", [
  "copy",
  "html", "css", "js", "imgs",
  "serve", "watch"
]);
