const maskify = (input: string): string => {
  if (input.length <= 4) return input;

  const last4Digits = input.slice(-4);
  const maskedCharacters = "#".repeat(input.length - 4);

  return maskedCharacters + last4Digits;
};

console.log(maskify("12345678"));
