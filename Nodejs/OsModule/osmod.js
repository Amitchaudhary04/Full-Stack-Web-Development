const os = require("os");
console.log(os.arch());

const freeMem = os.totalmem();
console.log(`${freeMem /(1024**3)}`);//Gives it in bytes

console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

// const path = require("path");
// console.log(path.dirname('C:/Users/amit chaudhary/OneDrive/Documents/Full Stack Web Development/OsModule>'));
// console.log(path.extname('C:/Users/amit chaudhary/OneDrive/Documents/Full Stack Web Development/OsModule>'));