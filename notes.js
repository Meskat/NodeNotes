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
  } catch (e) {
    console.log('We can not find file with your notes!', e);
  }
};

getAllNotes = () => {
  try {
     let notes = JSON.parse(fs.readFileSync('notes.json'));
    if (notes) {
      console.log('All your notes!');
      notes.forEach(note =>
        console.log(
          `title: ${note.title}\n`,
          `note: ${note.content}\n`
        ))
    } else {
      console.log('You do not have any notes!');
    }
  } catch (e) {
    console.log('We can not find file with your notes!', e);
  }
};

getNote = (title) => {
  try {
    let notes = JSON.parse(fs.readFileSync('notes.json'));
    if (notes) {
      const note = notes.find(note => note.title === title);
      if(note) {
        console.log(
          `title: ${note.title}\n`,
          `note: ${note.content}\n`
        );
      } else {
        console.log(`Sorry! We can not find note you are looking for! Is this title correct? => ${title}`);
      }
    } else {
      console.log('Your notes file seems to be empty');
    }
  } catch (e) {
    console.log('We can not find file with your notes!', e);
  }
};

module.exports = {
  addNote,
  getAllNotes,
  getNote,
  removeNote,
};