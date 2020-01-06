const gulp = require('gulp')


gulp.task('default',() =>{
   
    gulp.start('copiar','fim')

})

gulp.task('copiar',['antes1', 'antes2'], () => {
   console.log('Copiar')

})

gulp.task('antes1',()=> {
    console.log('antes1')
})

gulp.task('antes2',()=> {
    console.log('antes2')
})

gulp.task('fim',()=> {
    console.log('fim')
})

//gulp.src(['pastaA/arquivo1.txt','pastaB/arquivo2.txt'])
    
//.pipe(gulp.dest('pastaB'))