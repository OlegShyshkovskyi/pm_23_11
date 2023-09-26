const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');
const browserSync = require('browser-sync').create();

// Шляхи до файлів та директорій
const paths = {
  styles: 'src/scss/**/*.scss',
  scripts: 'src/js/**/*.js',
  html: 'src/*.html',
};

// Таск для компіляції Sass у CSS, автопрефіксінга, мініфікації та збереження в папці 'dist'
gulp.task('styles', () => {
  return gulp
    .src(paths.styles)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

// Таск для мініфікації та збереження JavaScript файлів в папці 'dist'
gulp.task('scripts', () => {
  return gulp
    .src(paths.scripts)
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

// Таск для видалення попередньої збірки
gulp.task('clean', () => {
  return del(['dist']);
});

// Таск для відстежування змін у файлах та автоматичного оновлення сторінок за допомогою Browser Sync
gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch(paths.styles, gulp.series('styles'));
  gulp.watch(paths.scripts, gulp.series('scripts'));
  gulp.watch(paths.html).on('change', browserSync.reload);
});

// Таск для збірки проекту (запускається командою 'gulp build')
gulp.task('build', gulp.series('clean', 'styles', 'scripts'));

// Таск за замовчуванням (запускається командою 'gulp')
gulp.task('default', gulp.series('build', 'watch'));