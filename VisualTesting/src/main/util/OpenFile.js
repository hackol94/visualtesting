const fs = require("fs");

 module.exports.read = function read(filename){
    return fs.readFileSync(filename, "utf8");
    }

