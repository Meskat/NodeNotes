const fs = require('fs');


const onError = (err) => {
  if (!err) return;
  console.log('Sorry, we were not able to create that note! See why -->', err);
};

addNote = (title, content) => {
  let notes;
  const note = {
    title,
    content,
  };

  try {
    notes = JSON.parse(fs.readFileSync('notes.json'));
  } catch (e) {
    notes = [];
  }

  notes.push(note);
  fs.writeFileSync('notes.json', JSON.stringify(notes), onError);
};

removeNote = (title) => {
  try {
    let notes = JSON.parse(fs.readFileSync('notes.json'));
    if (notes) {
      notes = notes.filter(note => note.title !== title);
      fs.writeFileSync('notes.json', JSON.stringify(notes), onError);
    } else {
      console.log('Your notes file seems to be empty');
    }
  } catch(e) {
    console.log('We can not find file with your notes!', e);
  }
};

getAllNotes = () => {
  console.log('Get all notes');
};

getNote = (title) => {
  console.log('get note', title);
};

module.exports = {
  addNote,
  getAllNotes,
  getNote,
  removeNote,
};