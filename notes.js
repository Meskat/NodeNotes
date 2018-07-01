const fs = require('fs');
const onError = (err) => {
  if (!err) return;
  console.log('\n Sorry, we were not able to create that note! See why -->', err);
};
const fetchNotes = () => {
  try {
     return JSON.parse(fs.readFileSync('notes.json'));
  } catch (e) {
    console.log('\n file with your notes does not exist!', e);
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
    console.log('\n You already have a note with this title, please change the title \n');
  } else {
    notes.push(note);
    saveNote(notes);
    console.log(`\n Your note was successfully added! \n`,
                 `title: ${title} \n`,
                 `content: ${content} \n`);
  }
};

removeNote = (title) => {
  let notes = fetchNotes();

  if (notes) {
    notes = notes.filter(note => note.title !== title);
    saveNote(notes);
    console.log('\n Note was removed \n');
  } else {
    console.log('\n Your notes file seems to be empty \n');
  }
};

getAllNotes = () => {
  let notes = fetchNotes();
  if (notes) {
      console.log('\n All your notes :  \n');
      notes.forEach(note =>
        console.log(
          `title: ${note.title}\n`,
          `note: ${note.content}\n`,
          '- - - - -'
        ))
    } else {
      console.log('\n You do not have any notes! \n');
  }
};

getNote = (title) => {
    let notes = fetchNotes();
    if (notes) {
      const note = notes.find(note => note.title === title);

      if (note) {
        console.log(
          `\n title: ${note.title}\n`,
          `note: ${note.content}\n`
        );
      } else {
        console.log(`\n Sorry! We can not find note you are looking for! Is this title correct? => ${title} \n`);
      }
    } else {
      console.log('\n Your notes file seems to be empty \n');
    }
};

module.exports = {
  addNote,
  getAllNotes,
  getNote,
  removeNote,
};