'use strict'

const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
  const mainWindow = new BrowserWindow()
  mainWindow.loadURL(`file://${__dirname}/index.html`)
})
