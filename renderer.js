(() => {
  'use strict'
  const $ = document.querySelector.bind(document)
  const editor = new SimpleMDE({ toolbar: false })

  const { remote } = require('electron')
  const notes = remote.getGlobal('notes')

  const ul = $('#list')

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
})()
