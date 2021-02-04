const repeatNumbers = function(data) {
  let result = '';
  for (let i = 0; i < data.length; i++) {
    let repeatedNumber = data[i][0].toString();
    let timesToRepeat = data[i][1].toString();
    result += repeatedNumber.repeat(timesToRepeat);
    if (i !== data.length - 1) {
      result += ', ';
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));    // 1111111111
console.log(repeatNumbers([[1, 2], [2, 3]])); // 11, 222
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));    // 10101010, 343434343434, 9292