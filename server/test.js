const validator = require('validator');
var chalk = require('chalk');
var yargs = require('yargs');
// console.log(validator);
// console.log(validator.isURL("www.google.cm"));
// console.log(chalk.blue('Hello'));
// console.log(chalk.green('Hello'));
// console.log(chalk.has256('34'));
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
 
console.log(error('Error!'))
console.log(warning('Error!'))

yargs.version('1.1.0')
yargs.command({
command: 'add',
describe: 'Add a new note',
handler: function () {
console.log('Adding a new note!')
}
})
console.log(yargs.argv)
