#!/usr/bin/node
const myargs = process.argv;
const intnum = parseInt(myargs[2]);
if (!isNaN(intnum)) {
	console.log('My number: $(intnum)');
} else {
	console.log('Not anumber');
}
