let fs = require('fs');

let dir = fs.readdir(__dirname, {encoding: "utf8"}, (err, files)=>{
  console.log('err--->', err);
  console.log('files--->', files);
});
console.log('dir--->', dir);