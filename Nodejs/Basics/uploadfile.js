import http from "node:http";
import formidable, { errors as formidableErrors } from "formidable";
import fs from "node:fs";

const server = http.createServer(async (req, res) => {
  if (req.url === "/api/upload" && req.method.toLowerCase() === "post") {
    // parse a file upload
    const form = formidable({});
    let fields;
    let files;
    try {
      [fields, files] = await form.parse(req);
    } catch (err) {
      // example to check for a very specific error
      if (err.code === formidableErrors.maxFieldsExceeded) {
      }
      console.error(err);
      res.writeHead(err.httpCode || 400, { "Content-Type": "text/plain" });
      res.end(String(err));
      return;
    }
    fs.readFile(files.multipleFiles[0].filepath, function (err, data) {
      if (err) throw err;
      console.log("File read!");

      // Write the file
      fs.writeFile("D:\\MYPath\\"+files.multipleFiles[0].originalFilename, data, function (err) {
        if (err) throw err;
        res.write("File uploaded and moved!");
        console.log("File written!");
      });

      // Delete the file
      fs.unlink(files.multipleFiles[0].filepath, function (err) {
        if (err) throw err;
        console.log("File deleted!");
      });
    });
    res.writeHead(200, { "Content-Type": "application/json" });
    console.log(
      files.multipleFiles[0].filepath,
      typeof files.multipleFiles[0].filepath
    );
    res.end(JSON.stringify({ fields, files }, null, 2));
    return;
  }

  // show a file upload form
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <h2>With Node.js <code>"http"</code> module</h2>
    <form action="/api/upload" enctype="multipart/form-data" method="post" target="_blank">
      <div>File: <input type="file" name="multipleFiles" multiple="multiple" /></div>
      <input type="submit" value="Upload" />
    </form>
  `);
});

server.listen(8080, () => {
  console.log("Server listening on http://localhost:8080/ ...");
});
