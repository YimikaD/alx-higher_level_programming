#!/usr/bin/node
//script that prints a message depending of the number of arguments passed
let myArgs = process.argv.slice(2);
let argCount = myArgs.length;

if (argCount == 0) {
	console.log('No argument');
} else if (argCount == 1) {
	console.log('Argument found');
} else {
	console.log('Argument found');
}
