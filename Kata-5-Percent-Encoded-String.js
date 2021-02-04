const urlEncode = function(text) {
  let trimmedText = text.trim();
  let encodedText = '';
  for (const eachLetter of trimmedText) {
    if (eachLetter === " ") {
      encodedText += '%20';
    } else {
      encodedText += eachLetter;
    }
  }
  return encodedText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));


// Lighthouse%20Labs
// Lighthouse%20Labs
// blue%20is%20greener%20than%20purple%20for%20sure