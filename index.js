// PATH

let user = "MujahidFisher"
const path = require("path")
console.log(path.join(__filename, user));

// os 

const os = require('os');
console.log("My Total Memory " + os.totalmem(), "Bytes");

// fs

let fs = require('fs');

fs.appendFile('MyFile.txt', "Hi Joel!", function (err) {
  if (err) throw err;
  console.log("Yes! no errors!");
});