#!/usr/bin/node

let myArgs = process.argv.slice(2);
let argCount = myArgs.length;

if (myArgs == 0) {
	console.log('No argument');
} else if (myArgs == 1) {
	console.log('Argument found');
} else {
	console.log('Argument found');
}
