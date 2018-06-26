const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;
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
    console.log('Sorry we are not able to understand your command!', );
    break;
}
console.log('args', process.argv); // argument vector