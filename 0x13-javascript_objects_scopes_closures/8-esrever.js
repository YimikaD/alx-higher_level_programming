#!/usr/bin/node
exports.esrever = function (list) {
  const newListing = [];
  for (let i = list.length - 1; i >= 0; i--) {
    newListing.push(list[i]);
  }
  return newListing;
};
