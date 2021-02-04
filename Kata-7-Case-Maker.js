const camelCase = function(input) {
  let result = '';
  let dummyString = input.split(" ");
  result += dummyString[0];
  for (let i = 1; i < dummyString.length; i++) {
    result += dummyString[i].charAt(0).toUpperCase() + dummyString[i].slice(1);
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));