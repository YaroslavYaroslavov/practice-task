const findFirstUniqueCharacter = (str) => {
  let charMap = {};
  for (let char of str) {
    charMap[char] = (charMap[char] || 0) + 1;
  }
  for (let char of str) {
    if (charMap[char] === 1) {
      return char;
    }
  }
  return null;
};
