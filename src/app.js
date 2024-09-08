const express = require('express');
const bodyParser = require('body-parser');

const { getStoredNotes, storeNotes } = require('./data/notes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/notes', async (req, res) => {
  const storedNotes = await getStoredNotes();
  res.json({ notes: storedNotes });
});

app.get('/notes/:id', async (req, res) => {
  const storedNotes = await getStoredNotes();
  const note = storedNotes.find((note) => note.id === req.params.id);
  res.json({ note });
});

app.post('/notes', async (req, res) => {
  const existingNotes = await getStoredNotes();
  console.log(existingNotes)
  const noteData = req.body;
  const newNote = {
    ...noteData,
    id: Math.random().toString(),
  };
  const updatedNotes = [newNote, ...existingNotes];
  await storeNotes(updatedNotes);
  res.status(201).json({ message: 'Stored new note.', note: newNote });
});

app.listen(8000, () => {
  console.log(`Server is running on port: ${8000}`);
});
