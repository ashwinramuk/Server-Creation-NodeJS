const fs = require('fs');
const http = require('http');
const path = require('path');
let YourName = 'Ashwin Kumar S'

fs.writeFile(
    path.join(__dirname,"index.html"),
    `<h1> Hello World </h1>
    <p> This is ${YourName}... </p>`,
    (err)=>{console.log(err)}
    )
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":"text/html"
    })
    fs.readFile(path.join(__dirname,"index.html"),'utf-8',(err,data)=>{res.end(data)})
})


server.listen(5000,()=>{console.log("server started")})