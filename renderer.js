(() => {
  'use strict'
  const $ = document.querySelector.bind(document)

  const { remote } = require('electron')
  const notes = remote.getGlobal('notes')

  const ul = $('#list')
  ul.innerHTML = notes.reduce((a, note, i) =>
    `${a}<li id="${i}" class="list-group-item" contenteditable>${note.title}</li>`, '')
})()
