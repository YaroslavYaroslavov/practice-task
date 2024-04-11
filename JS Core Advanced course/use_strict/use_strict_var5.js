"use strict";

const splitWords = (inputString) => {
  if (typeof inputString === "string") {
    return inputString.split(/\s+/);
  } else {
    return [];
  }
};

// console.log(splitWords("благоприятный день для творческих начинаний"));
