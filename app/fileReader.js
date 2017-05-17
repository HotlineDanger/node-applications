const fs = require("fs");
let content;

function stats(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
}

Promise.all([
  stats("app/tests/file.md"),
  stats("app/tests/file2.md"),
  stats("app/tests/file3.md")
])
.then((data) => console.log(data))
.catch((err) => console.log(err));

// console.log("Start reading the file");
//
// content = fs.readFile("app/tests/file.md", "utf-8", (error, content) => {
//   if(error) {
//     console.log("An error occured while trying to read the file.");
//     return console.log(error);
//   }
//
//   console.log(`CONTENT: ${content}`);
// });
//
//
//
// console.log("End of file content");
