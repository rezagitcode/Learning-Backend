var fs = require('fs');
fs.rename('file1.html','file1.txt',function(err){
    if(err) throw err;
    console.log('file renamed!!!');
})