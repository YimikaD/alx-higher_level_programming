#!/usr/bin/node
const myargs = process.argv;
const intnum = parseInt(myargs[2]);
if (isNaN(intnum)) {
	console.log('Not a number');
} else {
	console.log('My number: $(intnum[2])');
}
