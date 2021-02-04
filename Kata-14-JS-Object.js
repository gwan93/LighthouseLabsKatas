// %20 represents a space character.
// Key-value pairs are represented using an = character: key=value
// Multiple key-value pairs are separated using a & character: key1=value1&key2=value2


const urlDecode = function(text) {
  let url = {};
  let dummyArray = [];

  // if the text includes '&', it means there are multiple key value pairs.
  if (text.includes('&')) {
    let dummyText = text.split('&');
    // console.log(dummyText);
    for (let eachElement of dummyText) {    // push each key value pair to dummyArray
      dummyArray.push(eachElement);
    }
  } else {    // if no '&' character then push the single key value pair to dummyArray
    dummyArray.push(text);
  }
  // console.log(dummyString);

  for (const eachElement of dummyArray) {
    // console.log(eachElement);
    if (eachElement.includes('=')) {
      let dummyKeyString = eachElement.split('=');  // finds the '=' character and assigns them as key value pairs to url
      // console.log(dummyString);
      url[dummyKeyString[0]] = dummyKeyString[1];
      // console.log(url);
      // console.log(Object.keys(url));
      for (let eachKey of Object.keys(url)) {   // if theres a '%20' character within the value string, replace with ' '
        if (url[eachKey].includes('%20')) {
          url[eachKey] = url[eachKey].split('%20').join(' ');
          // console.log(url[eachKey]);
        }
      }
    }
  }
  return url;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);