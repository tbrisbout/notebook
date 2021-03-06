'use strict'

const { app, BrowserWindow } = require('electron')
// const { client } = require('electron-connect')

const notes = require('./notes.json')
global.notes = notes

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: './icon.png',
  })

  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.on('closed', () => { mainWindow = null })
})

app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit() })

// client.create(mainWindow)
