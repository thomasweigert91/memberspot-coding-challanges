const TESTARRAY = ["Alex", "Mark", "Max"];

const checkWhoLikesIt = (input: string[]): string => {
  const likeCount = input.length;
  switch (likeCount) {
    case 0:
      return "No one likes this";
    case 1:
      return `${input[0]} likes this!`;
    case 2:
      return `${input[0]} and ${input[1]} like this!`;
    case 3:
      return `${input[0]}, ${input[1]} and ${input[2]} like this!`;
    default:
      return `${input[0]}, ${input[1]} and ${likeCount - 2} others like this!`;
  }
};

console.log(checkWhoLikesIt(TESTARRAY));
