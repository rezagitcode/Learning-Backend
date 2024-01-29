const http = require("http");
const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;
    if(url === "create-user" && method === "POST"){
        console.log("inside create user");
        const dataBody = [];
        req.on("data",(chunk)=>{
            dataBody.push(chunk);
        });
        req.on("end",()=>{
            const parsedDataBody = Buffer.concat(dataBody).toString().split("=")[1];
            console.log(parsedDataBody);
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        })
    }
    if(url === "/"){
        // console.log("inside home");
        res.write("<html>");
        res.write("<head><title>My First App</title></head>");
        res.setHeader("content-type","text/html");
        res.write("<body><h1>Salam from my web server</h1><form action='/create-user' method='POST'><input type='text' name='username' placeholder='username'><button type='submit'>Create User</button></form></body>");
        return res.end();
    }
    if(url === "/users"){
        console.log("inside users");
        res.setHeader("content-type","text/html");
        res.write("<html>");
        res.write("<head><title>My Users List</title></head>");
        res.write("<body><h1>My Users:</h1><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>");
        return res.end();
    }
});
server.listen(3000);