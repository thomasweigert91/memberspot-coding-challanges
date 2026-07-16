const testArray = ["O", "Q", "R", "S"];

const findMissingLetter = (input: string[]): string => {
  let previousChar = input[0].charCodeAt(0);

  for (let i = 1; i < input.length; i++) {
    const currentChar = input[i].charCodeAt(0);
    if (currentChar !== previousChar + 1) {
      return String.fromCharCode(previousChar + 1);
    }

    previousChar = currentChar;
  }
  return "";
};

console.log(findMissingLetter(testArray));
