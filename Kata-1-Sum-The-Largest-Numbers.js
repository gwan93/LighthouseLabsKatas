const sumLargestNumbers = function(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    // console.log ('i is ' + i);
    for (let j = i + 1; j < data.length; j++) {
      // console.log ('j is ' + j);
      let innerSum = data[i] + data[j];
      // console.log('innersum is ' + innerSum);
      if (innerSum > sum) {
        sum = innerSum;
        // console.log('sum is now ' + sum);
      }
    }
  }
  return sum;
};

console.log(sumLargestNumbers([1, 10]));    // 11
console.log(sumLargestNumbers([1, 2, 3]));  // 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));    // 126
console.log(sumLargestNumbers([191, 20, 3, 4, 5, 6, 12, 151])); // 342