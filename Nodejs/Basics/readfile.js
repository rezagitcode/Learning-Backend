import http from "node:http";
import fs from "node:fs";
http.createServer(function (req, res){
    fs.readFile('file1.txt',function(err,data){
        if(err) throw err;
        res.writeHead(200,{"content-type":"text/html"});
        res.write(data);
        return res.end();
    });
}).listen(8080);