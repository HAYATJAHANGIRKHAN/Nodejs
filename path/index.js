const path = require("path");
// console.log(path.sep);  // \ (for window) /(for mac,linux)
// console.log(process.env.PATH); //; (window)  : (for mac,linux)
// console.log(path.delimiter);
const filePath1 ="/public_html/home/index.html";
const currentfilepath= _filename;
console.log(currentfilepath);
console.log(__dirname);

let basename= path.basename(currentfilepath);
console.log(basename);

// let basenameWithoutExt = path.basename(currentfilepath);