const blocksAway = function(directions) {
  let displacement = {east: 0, north: 0};
  
  // initialize starting facing direction
  let facingDirection = 'north';
  if (directions[0] === 'left') {
    facingDirection = 'east';
  }

  // read the directions array provided. i is the direction, j is the number of spaces to move
  for (let i = 0; i < directions.length; i += 2) {
    let j = i + 1;

    if (facingDirection === 'north' && directions[i] === 'right') {
      displacement['east'] += directions[j];
      facingDirection = 'east';
      continue;
    }

    if (facingDirection === 'north' && directions[i] === 'left') {
      displacement['east'] -= directions[j];
      facingDirection = 'west';
      continue;
    }

    if (facingDirection === 'east' && directions[i] === 'right') {
      displacement['north'] -= directions[j];
      facingDirection = 'south';
      continue;
    }

    if (facingDirection === 'east' && directions[i] === 'left') {
      displacement['north'] += directions[j];
      facingDirection = 'north';
      continue;
    }

    if (facingDirection === 'west' && directions[i] === 'right') {
      displacement['north'] += directions[j];
      facingDirection = 'north';
      continue;
    }

    if (facingDirection === 'west' && directions[i] === 'left') {
      displacement['north'] -= directions[j];
      facingDirection = 'south';
      continue;
    }

    if (facingDirection === 'south' && directions[i] === 'right') {
      displacement['east'] -= directions[j];
      facingDirection = 'west';
      continue;
    }

    if (facingDirection === 'south' && directions[i] === 'left') {
      displacement['east'] += directions[j];
      facingDirection = 'east';
      continue;
    }
  }
  return displacement;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 0, north: 0}