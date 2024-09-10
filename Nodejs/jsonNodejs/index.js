const fs = require("fs");
const bioData = {
    name:"Amit Chaudhary",
    age: 20,
    college:"GLA University"
};

const jsonData = JSON.stringify(bioData);
// const objData = JSON.parse(jsonData)
// console.log(objData);
fs.writeFile('json1.json',jsonData,(err) =>{
    console.log("done");
});

fs.readFile("json1.json","utf-8",(err,data)=>{
      console.log(data);
      const orgData = JSON.parse(data);
      console.log(orgData);
});