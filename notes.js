const onError = (err) => {
  if (!err) return;
  console.log('Sorry, we were not able to create that note! See why -->', err);
};

addNote = (title, content) => {
  console.log('add note', title, content);
};

removeNote = (title) => {
  console.log('add note', title);
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