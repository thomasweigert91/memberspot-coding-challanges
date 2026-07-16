const testInput = "is2 Thi1s T4est 3a";

const orderWords = (input: string): string => {
  const result: string[] = [];
  if (!input) return "";

  const wordArray = input.split(" ");

  wordArray.forEach((word) => {
    for (const char of word) {
      const position = Number(char);

      if (!isNaN(position)) {
        result[position - 1] = word;
        break;
      }
    }
  });
  return result.join(" ");
};

console.log(orderWords(testInput));
