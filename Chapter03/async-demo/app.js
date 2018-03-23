const fs = require('fs');

const basePath = __dirname + '/files/';
const files = ['file1.txt', 'file2.txt', 'file3.txt'];

fs.stat(basePath + 'file1.txt', (err, result) => {
  if(err) {
    console.log('err');
  } else {
    const { size, birthtime } = result;
    console.log('Size',size);
    console.log('Created', birthtime);
  }
});
