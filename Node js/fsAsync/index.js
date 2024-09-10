const fs=require("fs");
fs.writeFile("read.txt","How are you :",(err) =>

{
  console.log("files Are created");
  console.log(err);
});
fs.appendFile("read.txt" ,"hii",(err)=>{
               console.log('task complete');
});

fs.readFile("read.txt","UTF-8" ,(err,data) =>{
    console.log("hii");
});