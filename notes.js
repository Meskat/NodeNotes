const fs = require('fs');
const onError = (err) => {
  if (!err) return;
  console.log('Sorry, we were not able to create that note! See why -->', err);
};
const fetchNotes = () => {
  try {
     return JSON.parse(fs.readFileSync('notes.json'));
  } catch (e) {
    console.log('file with your notes does not exist!', e);
    return [];
  }
};
const saveNote = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes), onError);

addNote = (title, content) => {
  const note = {
    title,
    content,
  };
  let notes = fetchNotes();

  if ( notes.filter(note => note.title === title).length ) {
    console.log('You already have a note with this title, please change the title');
  } else if ( !content ) {
    console.log('Your note is too short or does not have a content');
  } else {
    notes.push(note);
    saveNote(notes);
    console.log(`\n Your note was successfully added! \n
                 title: ${title} \n
                 content: ${content} \n`);
  }
};

removeNote = (title) => {
  let notes = fetchNotes();

  if (notes) {
    notes = notes.filter(note => note.title !== title);
    saveNote(notes);
  } else {
    console.log('Your notes file seems to be empty');
  }
};

getAllNotes = () => {
  let notes = fetchNotes();
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
};

getNote = (title) => {
    let notes = fetchNotes();
    console.log('notes', notes );
    if (notes) {
      const note = notes.find(note => note.title === title);

      if (note) {
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
};

module.exports = {
  addNote,
  getAllNotes,
  getNote,
  removeNote,
};