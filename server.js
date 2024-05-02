const express = require('express');
const app = express();
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

// middleware for paring JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', api);

app.use(express.static('public'));

//  a route that will serve up the public foler into index.html (or use: `app.get('/paths', and then public/paths.html` page)
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);

module.exports = app;
