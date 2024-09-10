const EventEmitter = require("events");
// const event = require("events");
const event = new EventEmitter();
event.on('sayMyName',()=>{ //Events kya kare hame batana hai
    console.log("My Name is Amit");
});
event.emit('sayMyName');
