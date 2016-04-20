(() => {
  'use strict'
  const $ = document.querySelector.bind(document)
  const editor = new SimpleMDE({ toolbar: false })

  const fs = require('fs')
  const Firebase = require('firebase')
  const db = new Firebase('https://torrid-fire-1337.firebaseio.com')

  const { remote } = require('electron')
  const notes = remote.getGlobal('notes')

  const ul = $('#list')
  const btn = $('#saveBtn')

  ul.innerHTML = notes.reduce((a, note, i) =>
    `${a}<li id="${i}" class="list-group-item" contenteditable>${note.title}</li>`, '')

  ul.addEventListener('click', ({ target: li }) => {
    const activeLi = $('li.selected')
    if (activeLi) activeLi.classList.remove('selected')

    li.classList.add('selected')
    editor.value(notes[li.id].content)
  })

  ul.addEventListener('input', ({ target: li }) => {
    notes[li.id].title = li.textContent
  })

  const notify = body => new Notification('Notebook', { body, icon: './icon.png' })

  btn.addEventListener('click', () => {
    notes[$('li.selected').id].content = editor.value()
    fs.writeFile('./notes.json', JSON.stringify(notes), () => notify('notes successfully saved'))
    db.set(notes, () => notify('Notes saved on cloud'))
  })
})()
