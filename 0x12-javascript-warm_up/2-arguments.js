#!/usr/bin/node
/*
 * script that prints a message depending of the number of arguments passed
*/
const myArgs = process.argv.slice(2);
const argCount = myArgs.length;
/*
 * checks number of arguments
 */
if (argCount == 0) {
	console.log('No argument');
} else if (argCount == 1) {
	console.log('Argument found');
} else {
	console.log('Arguments found');
}
