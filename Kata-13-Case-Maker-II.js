const makeCase = function(input, caseStyle) {
  // define a separate variable edgeOutput to be iterated through if caseStyle is an array
  // that includes multiple case styles to be applied to the input
  let edgeOutput = input;
  if (typeof caseStyle !== 'string') {
    for (let eachElement of caseStyle) {
      edgeOutput = caseFunction(edgeOutput,eachElement);
    }
    return edgeOutput;
  } else {
    return caseFunction(input,caseStyle);
  }
};

// defining a function to modify all the inputs. this is to prevent repeating code
const caseFunction = function(input, caseStyle) {
  let output = '';
  let inputArray = input.split(' ');
  let vowels = ['a','e','i','o','u'];
  switch (caseStyle) {
  case 'camel':
    output += inputArray[0];
    for (let i = 1; i < inputArray.length; i++) {
      output += inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1);
    }
    break;
  case 'pascal':
    for (let i = 0; i < inputArray.length; i++) {
      output += inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1);
    }
    break;
  case 'snake':
    for (let i = 0; i < inputArray.length; i++) {
      output += inputArray[i];
      if (i !== inputArray.length - 1) {
        output += '_';
      }
    }
    break;
  case 'kebab':
    for (let i = 0; i < inputArray.length; i++) {
      output += inputArray[i];
      if (i !== inputArray.length - 1) {
        output += '-';
      }
    }
    break;
  case 'title':
    for (let i = 0; i < inputArray.length; i++) {
      output += inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1);
      if (i !== inputArray.length - 1) {
        output += ' ';
      }
    }
    break;
  case 'vowel':
    for (let i = 0; i < input.length; i++) {
      if (vowels.includes(input[i])) {
        output += input[i].toUpperCase();
      } else {
        output += input[i];
      }
    }
    break;
  case 'consonant':
    for (let i = 0; i < input.length; i++) {
      if (!vowels.includes(input[i])) {
        output += input[i].toUpperCase();
      } else {
        output += input[i];
      }
    }
    break;
  case 'upper':
    for (let i = 0; i < input.length; i++) {
      output += input[i].toUpperCase();
    }
    break;
  }
  return output;
};

console.log(makeCase("this is a string", "camel"));   // thisIsAString first letter of each word capitalized no spaces excluding first word
console.log(makeCase("this is a string", "pascal"));  // ThisIsAString first letter of each word capitalized no spaces
console.log(makeCase("this is a string", "snake"));   // this_is_a_string underscores between words
console.log(makeCase("this is a string", "kebab"));   // this-is-a-string hyphen between words
console.log(makeCase("this is a string", "title"));   // This Is A String first letter capitalized with spaces
console.log(makeCase("this is a string", "vowel"));   // thIs Is A strIng all vowels capitalized with spaces
console.log(makeCase("this is a string", "consonant"));         // THiS iS a STRiNG all consonants capitalized with spaces
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", ["upper", "snake"]));  // THIS_IS_A_STRING all upper case with underscores between words