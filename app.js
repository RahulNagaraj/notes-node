console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

switch (command) {
  case 'add':
    console.log('Add a new note');
    notes.addNote(argv.title, argv.body);
    break;
  case 'list':
    console.log('Listing all notes');
    notes.getAll();
    break;
  case 'read':
    console.log('Reading a note');
    notes.getNote(argv.title);
    break;
  case 'remove':
    console.log('Remove a note');
    notes.removeNote(argv.title);
    break;
  default:
    console.log('Command not recognized');
    break;
}
