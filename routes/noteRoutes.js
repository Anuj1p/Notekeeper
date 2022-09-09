const express = require('express');

const {getNoteById, getNotes, createNote, deleteNote, UpdateNote} = require('../controllers/noteController');

const router = express.Router();

const {protect} = require('../middlewares/authMiddleware');

router.get('/', protect, getNotes);

router.get('/:id', getNoteById);
router.delete('/:id', protect, deleteNote);
router.put('/:id', protect, UpdateNote);


router.post('/create', protect, createNote);

module.exports = router;