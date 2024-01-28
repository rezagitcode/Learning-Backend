const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('content-type','text/html');
        res.write('<html>');
        res.write('<head><title>My First WebPage</title>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        return res.end();
    }
    if(url === '/message' && method === "POST"){
        const body = [];
        req.on('data',(chunk) =>{
           console.log(chunk);
           body.push(chunk);
        })
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            fs.writeFileSync('file.txt',parsedBody.split('=')[1].replaceAll("+"," "));
        })
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>My First WebPage</title>');
    res.write('<body><h1>Salam from my web server</h1></body>');
    res.end();
});
server.listen(3000);