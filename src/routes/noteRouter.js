const express = require('express')
const router = express.Router()

const {
  deleteNote,
  getOneNote,
  getNotes,
  sendNote,
  putNote
} = require('../controllers/notesController')

router.get('/', getNotes)
router.get('/:id', getOneNote)
router.delete('/:id', deleteNote)
router.post('/', sendNote)
router.put('/:id', putNote)

module.exports = router
