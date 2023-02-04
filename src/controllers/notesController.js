let notes = require('../notes')

exports.getNotes = (req, res) => {
  res.json(notes)
}

exports.getOneNote = (req, res) => {
  const id = Number(req.params.id)
  const note = notes.find((note) => note.id === id)
  if (note) res.send(note)
  else res.status(404).end()
}

exports.deleteNote = (req, res) => {
  const id = Number(req.params.id)
  notes = notes.filter((note) => note.id !== id)
  console.log(notes)
  res.status(204).end()
}

exports.sendNote = (req, res) => {
  const note = req.body

  if (!note || !note.title) {
    return res.status(400).json({
      error: 'note.content is missing'
    })
  }

  const ids = notes.map((note) => note.id)
  const idMax = ids.length === 0 ? 0 : Math.max(...ids)
  console.log(typeof note.important)
  const newNote = {
    id: idMax + 1,
    title: note.title,
    content: note.content || '',
    // important: typeof note.important === undefined ? note.important : false,
    important: note.important || false,
    date: new Date().toISOString()
  }

  notes = [...notes, newNote]
  res.status(201).json({ id: idMax + 1 })
}

exports.putNote = (req, res) => {
  const id = Number(req.params.id)
  const updatedNote = req.body

  const index = notes.findIndex(note => note.id === id)
  if (index !== -1) {
    notes.splice(index, 1, { ...notes[index], ...updatedNote })
    return res.send(notes[index])
  }

  res.status(404).send('Nota no encontrada')
}
