const gulp = require('gulp');
const bs = require('browser-sync').get('server');

gulp.task('server', function() {
  bs.init({
    notify: false,
    open: true,
    server: {
      baseDir: "./src/",
    }
  });

  gulp.watch(['./src/css/**/*', '!./src/css/main.css'], ['sass']);
  gulp.watch("./src/js/bundle.js").on('change', bs.reload);
  gulp.watch("./src/*.html").on("change", bs.reload);
});
