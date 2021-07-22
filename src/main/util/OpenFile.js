const fs = require("fs");

  function read(filename) {
    return new Promise(function(resolve, reject) {
        return fs.readFile(filename, function(err, data){
            if (err) throw err;
            
            return JSON.stringify(data);
        });
    });
};

module.exports={
    "read":read
}
