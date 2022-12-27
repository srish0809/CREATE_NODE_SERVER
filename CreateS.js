const http=require('http');// import files in node.js
// ./relative path /absolute path

const server=http.createServer((req,res)=>{
    console.log(req);
    res.end('<h1>SRASHTI</h1>')
   // process.exit(); this is to shut down the program
});

server.listen(4000);
