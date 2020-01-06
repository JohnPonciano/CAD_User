const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')


gulp.task('default',() => {
  
    return gulp.src('src/**/*.js')
        .pipe(babel({
            
        }))
})