#!/usr/bin/node
const myargs = process.argv;
const intnum = parseInt(myargs[2]);
if (isNaN(intnum)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < intnum; i++) {
    console.log('X'.repeat(intnum));
  }
}
