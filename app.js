const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
const titleOptions =   {
  describe: 'title of your note',
  demand: true,
  alias: 't'
};
const contentOptions =  {
  describe: 'Content of your note',
  demand: true,
  alias: 'c'
};
const argv = yargs
  .command('add', 'add new note', {
    title : titleOptions,
    content: contentOptions
  })
  .command('remove', 'remove note', {
    title : titleOptions,
  })
  .command('read', 'read note', {
    title : titleOptions,
  })
  .command('list', 'read all')
  .help()
  .argv;
const command = argv._[0];


switch (command) {
  case 'add':
    notes.addNote(argv.title, argv.content);
    break;
  case 'remove':
    notes.removeNote(argv.title);
    break;
  case 'list':
    notes.getAllNotes();
    break;
  case 'read':
    notes.getNote(argv.title);
    break;
  default:
    console.log('Sorry we are not able to understand your command!');
    break;
}
console.log('args', argv); // argument vector