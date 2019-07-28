const fs = require('fs');
const path = require('path');

/* Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
    if(err) throw err;
    console.log("folder created...")
});*/

// Create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world!', err => {
    if(err) throw err;
    console.log("file Written to...")
});

// Read File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data)
});

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', (err, data) => {
    if(err) throw err;
    console.log(data)
});
