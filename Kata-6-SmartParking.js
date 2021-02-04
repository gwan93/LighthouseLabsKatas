const whereCanIPark = function(spots, vehicle) {
  // Create an array of valid spots based on vehicle
  let allowableSpots;
  if (vehicle === "regular") {
    allowableSpots = ['R'];
  }

  if (vehicle === "small") {
    allowableSpots = ['R', 'S'];
  }

  if (vehicle === 'motorcycle') {
    allowableSpots = ['R', 'S', 'M'];
  }

  // Scan each row, and then each entry to see if entry is a valid spot
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      if (allowableSpots.includes(spots[y][x])) {
        return '[' + x + ', ' + y + ']';
      }
    }
  }
  return false; // return false if no valid parking spot is returned
};


// Regular cars can only park in R spots.
// Small cars can park in R or S spots.
// Motorcycles can park in R, S, or M spots.
// upper-case letter means that the particular spot is AVAILABLE
// lower-case letters mean that the spot is UNAVAILABLE

console.log(whereCanIPark(      // [4, 0]
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(      // false
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(      // [3,1]
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));