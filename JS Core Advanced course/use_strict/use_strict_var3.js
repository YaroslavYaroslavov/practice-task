"use strict";

const countVowels = (str) => {
  if (typeof str === "string") {
    let vowelCount = 0;
    for (let char of str) {
      if ("aeiouAEIOU".includes(char)) {
        vowelCount++;
      }
    }
    return vowelCount;
  } else {
    return 0;
  }
};

// console.log(countVowels("ae))"));
