var http = require("http");
var fs = require("fs");
var url = require("url");
http
  .createServer(function (req, res) {
    var filename = "." + url.parse(req.url, true).pathname;
    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
