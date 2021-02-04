const conditionalSum = function(values, condition) {
  let evenSum = 0;
  let oddSum = 0;
  for (let num of values) {
    // console.log(num);
    if (num % 2 === 0 && condition === 'even') {
      evenSum += num;
      // console.log('even sum is now ' + evenSum);
    } else if (num % 2 !== 0 && condition === 'odd') {
      oddSum += num;
      // console.log('odd sum is now '+ oddSum);
    }
  }
  if (condition === "even") {
    return evenSum;
  } else if (condition === 'odd') {
    return oddSum;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));   // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));    // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));    // 144
console.log(conditionalSum([], "odd"));   // 0

console.log(conditionalSum([13, 88, 12, 44, 99], "odd")); // 112
console.log(conditionalSum([], "even")); // 0
