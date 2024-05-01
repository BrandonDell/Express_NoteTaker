const diagnostics = require('epress').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

diagnostics.get('/', (req, res) => {
    // need code for sending all the content of db/diagnostic.json
})

// Post route for error logging
diagnostics.post('/', (req, res) => {

});

module.exports = diagnostics