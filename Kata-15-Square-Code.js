const squareCode = function(message) {
  // removing empty spaces and declaring array
  let text = message.split(' ').join('');
  let squared = Math.ceil(Math.sqrt(text.length));
  let array = [];

  // initializing arrays
  for (let i = 0; i < squared; i++) {
    array[i] = [text[i]];
  }

  // adding the remaining letters to arrays
  for (let k = squared; k < text.length;) {
    for (let i = 0; i < squared; i++) {
      array[i].push(text[k]);
      k++;
    }
  }

  // take all letters inside the area (left to right, top to bottom) and putting them into a string
  let solution = '';
  for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < array[i].length; k++) {
      if (array[i][k] === undefined) {
        break;
      }
      solution += array[i][k];
    }
    solution += ' ';
  }
  return solution;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));


// clu hlt io
// fto ehg ee dd
// hae and via ecy
// imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau