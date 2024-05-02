const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync('db/db.json', 'utf8');
  }

  write(note) {
    return writeFileAsync('db/db.json', JSON.stringify(note));
  }
  getNotes() {
    return this.read().then((notes) => {
      let parsedNotes;

      try {
        parsedNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        parsedNotes = [];
      }

      return parsedNotes;
    });
  }

  addNote(note) {
    const { title, text } = note;

    if (!title || !text) {
      throw new Error("Note 'title' and 'text' cannot be blank");
    }
      this.read().then(notes => {
          let parsedNotes = JSON.parse(notes);
          parsedNotes.push({ title, text, id: uuidv4() });
          return this.write(parsedNotes);
      })
  }
  removeNote(id) {
      this.read().then(notes => {
          let parsedNotes = JSON.parse(notes);
          let updatedNotes = parsedNotes.filter(note => note.id !== id);
          return this.write(updatedNotes);
      })
  }
}
module.exports = new Store()