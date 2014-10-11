// MAKE IT MODULAR
// Exercise 6 of 13


// FILTERED LS
// Exercise 5 of 13
var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function (err, files) {
    if (err) { console.log("error:", err); return };

    files.forEach(function (file) {
        if (path.extname(file) === "." + ext) {
            console.log(file);
        }
    });
});


