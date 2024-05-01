const router = require('express').Router();
const store = require('../db/store');

// GET api/notes responds with all notes from the db
router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then((notes) => {
            return res.json(notes);
        })
        .catch((err) => res.status(500).json(err));
});
// post route for notes
router.post('/notes', (req, res) => {
    store
        .addNote(req.body)
        .then((notes) => res.json(notes))
        .catch((err) => res.status(500).json(err));
});

// delete route for notes
router.delete('/notes/:id', (req, res) => {
    store
        .removeNote(req.params.id)
        .then((notes) => res.json({ ok: true }))
        .catch((err) => res.status(500).json(err));
});

module.exports = router;