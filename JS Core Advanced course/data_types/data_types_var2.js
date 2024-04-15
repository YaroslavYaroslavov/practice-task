const printLastCharacter = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return;
  }

  const lastCharacter = str.charAr(-1);

  console.log(lastCharacter);
};
