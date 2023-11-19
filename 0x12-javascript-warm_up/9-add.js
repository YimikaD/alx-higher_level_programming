#!/usr/bin/node
const myargs = process.argv;
const a = parseInt(myargs[2]);
const b = parseInt(myargs[3]);

function add (a, b) {
  return a + b;
}
console.log(add(a, b));
