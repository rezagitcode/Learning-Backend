var url = require('url');
adrs = "http://localhost:8080/default.htm?year=2017&month=february";
var q = url.parse(adrs,true);
console.log(q);
console.log("done");