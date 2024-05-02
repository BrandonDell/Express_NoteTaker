// get route for notes
const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');
const path = require('path');
notes.get('/notes', (req, res) => {
  res.sendFile(path.join (__dirname, '../public/notes.html'))
})

module.exports = notes;
