const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

switch (command) {
  case 'add':
    const note = notes.addNote(argv.title, argv.body);
    if (note) {
      console.log('Note created');
      notes.logNote(note);
    }
    else console.log('Title already taken');
    break;
  case 'list':
    const allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes.`);
    allNotes.forEach(note => notes.logNote(note));
    break;
  case 'read':
    const noteRead = notes.getNote(argv.title);
    console.log(noteRead);
    if (noteRead) {
      console.log('Note found');
      notes.logNote(noteRead);
    }
    else console.log('Note not found');
    break;
  case 'remove':
    const noteRemoved = notes.removeNote(argv.title);
    const message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
    break;
  default:
    console.log('Command not recognized');
    break;
}
