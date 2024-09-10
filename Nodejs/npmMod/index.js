const validator = require("validator");
const chalk = require("chalk");
const res = validator.isEmail("amitch@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));


