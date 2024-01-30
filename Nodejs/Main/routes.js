const fs = require("fs");
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First WebPage</title>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1].replaceAll("+", " ");
      fs.writeFile(
        "file.txt",
        message,
        (err) => {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        }
      );
    });
  }
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First WebPage</title>");
  res.write("<body><h1>Salam from my web server</h1></body>");
  res.end();
};
//   module.exports = {
//     handler:requestHandler,
//     someText:"Some coded text"
// }; same as:
// module.exports.handler = requestHandler;
// module.exports.someText = "some coded text"; same as:
exports.handler = requestHandler;
exports.someText = "some coded text";
