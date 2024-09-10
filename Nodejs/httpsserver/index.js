const http = require("http");
const url = require("url");
const server = http.createServer((req,res) =>{
     if(req.url === "/"){
          res.end("Welcome to Home Page");
     }
     else if(req.url ==="/contact"){
          res.end("Hello Contact US");
     }
      else if(req.url==="/about"){
          res.end("Welcome to About");
      }
      else{
          res.end("404 error");
      }

});

server.listen(8000,"127.0.0.1",() =>{
     console.log("listening to port 8000");
})