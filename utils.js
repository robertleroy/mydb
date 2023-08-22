const fs = require("fs");

function writeDataToFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content,0,2), "utf8", (err) => {
    if (err) console.log(err);
  });
}


module.exports = {
  writeDataToFile
}