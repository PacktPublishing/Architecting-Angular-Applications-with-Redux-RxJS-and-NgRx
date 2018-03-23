const async = require('async');
const fs = require('fs');
const basePath = __dirname + '/files/';
const files = ['file1.txt', 'file2.txt', 'file3.txt'];
const mappedFiles = files.map( f => basePath + f);

async.map(mappedFiles, fs.stat,(err, results) => {
  if(err) {
    console.log('error', err);
  }else {
    // looping through our results array
    results.forEach(({size, birthtime}) => {
      console.log('Size',size);
      console.log('Created', birthtime);
    });
  }
});
