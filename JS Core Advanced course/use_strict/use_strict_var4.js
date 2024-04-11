"use strict";

const checkForDuplicates = (arr) => {
  if (Array.isArray(arr)) {
    let set = new Set(arr);
    return set.size !== arr.length;
  } else {
    return false;
  }
};

console.log(checkForDuplicates([1, 2, 2]));
console.log(checkForDuplicates([1, 2, 3]));
