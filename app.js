
// const validator = require('validator'); // npm install validator@10.8.0
const chalk = require('chalk'); // npm install chalk@2.4.1
const yargs = require('yargs'); // npm i yargs@12.0.2

// sudo npm install -g nodemon@1.18.5
// -g makes it a global install
// [ctrl + C] to exit

const notes = require('./notes.js'); // Note is now an obj with 2 properties

// const msg = getNotes();

// console.log(msg);

// console.log(validator.isEmail('bob@example.com')); // returns true
// const successMsg = chalk.green.inverse.bold('Success!');
// console.log(successMsg);

// console.log(process.argv[2]); // argv - argument vector, array and argument provided

// const command = process.argv[2]; //node app.js add --title="This iis my title"


// you can use --help, --version

// if(command === 'add'){
//     console.log('Adding note!');
// }
// else if (command === 'remove'){
//     console.log('Removing note!');
// }

// Customiize yargs version
// yargs.version('1.1.0');

// Create add command
// node app.js add --title="Shopping List" --body="These are what I need to buy"
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: { // <-- a property
            describe: 'Note title',
            demandOption: true, // Requires a title
            type: 'string' // title should always be expecting a string
        },
        body: { 
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remmove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes();
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

yargs.parse(); // same as: console.log(yargs.argv); 