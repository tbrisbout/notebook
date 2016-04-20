'use strict'

const gulp = require('gulp')
const electron = require('electron-connect').server.create()

gulp.task('default', () => {
  electron.start()
  gulp.watch('main.js', electron.restart)
  gulp.watch(['index.css', 'index.html', 'renderer.js'], function() {
    console.log('coucou')
    electron.reload()
  })
})

// gulp.task('default')
