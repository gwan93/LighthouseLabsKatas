let prompt = require("prompt-sync")();

const guessNumber = function() {
  let randomizedNumber = Math.floor(Math.random() * 10);
  console.log(randomizedNumber);
  let guesses = [];
  let guessCount = 0;
  let gameOn = true;

  while (gameOn) {

    let answer = Number(prompt("Guess a number between 0 and 10: "));
    if (Number.isInteger(answer) === false) {
      console.log('Not a number! Try again!');
    } else if (guesses.includes(answer)) {
      console.log('Already guessed! Enter another number: ');
    } else if (answer < randomizedNumber) {
      console.log(answer + ' is too low!');
      guesses.push(answer);
      guessCount++;
    } else if (answer > randomizedNumber) {
      console.log(answer + ' is too high!');
      guesses.push(answer);
      guessCount++;
    } else if (answer === randomizedNumber) {
      console.log(`You got it! You took ${guessCount} attempts!`);
      gameOn = false;
      break;
    }
  }
};

guessNumber();