"use strict";

const checkArray = (arr, value) => {
  if (Array.isArray(arr) && arr.length > 0 && value !== undefined) {
    return arr.includes(value);
  } else {
    return false;
  }
};

// const a = [1, 2, 3];
// console.log(checkArray(a, 2));
