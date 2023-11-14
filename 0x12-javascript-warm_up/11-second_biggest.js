#!/usr/bin/node
const myargs = process.argv;

if (myargs.length === 2) {
  console.log(0);
} else if (myargs.length === 3) {
  console.log(0);
} else {
  let maxi = Math.max.apply(null, myargs.slice(2));
  const index = argss.indexOf(maxi.toString());
  myargs.splice(index, 1);
  maxi = Math.max.apply(null, myargs.slice(2));
  console.log(maxi);
}
