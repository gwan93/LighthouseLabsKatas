const calculateChange = function(total, cash) {
  let change = {};
  let difference = cash - total;

  let denominations = {
    'twentyDollar' : 2000,
    'tenDollar' : 1000,
    'fiveDollar' : 500,
    'twoDollar' : 200,
    'oneDollar' : 100,
    'quarter' : 25,
    'dime' : 10,
    'nickel' : 5,
    'penny' : 1,
  };
  
  let remainingChange = difference;
  for (let eachKey of Object.keys(denominations)) {
    if (remainingChange / denominations[eachKey] >= 1) {
      let multiple = Math.floor(remainingChange / denominations[eachKey]);
      remainingChange -= multiple * denominations[eachKey];
      change[eachKey] = multiple;
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

// { twoDollar: 1, dime: 1, penny: 3 }
// { tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
// { twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

// Valid denominations are as follows:
// Twenty dollars (2000)
// Ten dollars (1000)
// Five dollars (500)
// Two dollars (200)
// One dollar (100)
// Quarter (25¢)
// Dime (10¢)
// Nickel (5¢)
// Penny (1¢)