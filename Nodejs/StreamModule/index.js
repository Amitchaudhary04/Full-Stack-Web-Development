const fs = require("fs");
const http = require("http");
const server = http.createServer();
// server.on('request',(req,res)=>{
//     var fs = require('fs');
//     fs.readFile('input.txt',function(err,data){
//         if(err) return console.log(err);
//         res.end(data.toString())
//     });
// });



//2nd way
// server.on('request',(req,res)=>{
//    const rStream = fs.createReadStream("input.txt");
//    rStream.on('data',(chunkdata)=>{
//       res.write(chunkdata)
//    });
//    rStream.on('end',()=>{
//       res.end();
//    });
    
// });

//3rd method
server.on('request',(req,res)=>{
const rStream = fs.createReadStream("input.txt");
rStream.pipe(res);});

server.listen(8000,"127.0.0.1");