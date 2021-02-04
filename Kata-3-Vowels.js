const numberOfVowels = function(data) {
  let vowelCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let eachLetter of data) {
    if (vowels.includes(eachLetter)) {
      vowelCount += 1;
    }
  }
  return vowelCount;
};

console.log(numberOfVowels("orange"));  // 3
console.log(numberOfVowels("lighthouse labs"));   // 5
console.log(numberOfVowels("aeiou"));   // 5