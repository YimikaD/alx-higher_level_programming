#!/usr/bin/node
const myargs = process.argv;
let intnum = parseInt(myargs[2]);
if (isNaN(intnum)) {
  console.log('Missing number of occurrences');
} else {
  while (intnum > 0) {
    console.log('C is fun');
    intnum--;
  }
}
