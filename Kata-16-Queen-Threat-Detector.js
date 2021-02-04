const generateBoard = (pos1, pos2) => {
  let array = [];
  let x, y;
  for (let i = 1; i <= 8; i++) {
    array.push(new Array(8).fill(0));
  }
  [x, y] = pos1;
  array[x][y] = 1;
  [x, y] = pos2;
  array[x][y] = 1;
  return array;
};

const queenThreat = () => {
  let wqx, wqy, bqx, bqy;
  [wqx,wqy] = whiteQueen;
  [bqx,bqy] = blackQueen;
  let threatPositions = [];

  // find threat positions in relation to whiteQueen based relative position
  for (let i = 0; i < 8; i++) {
    threatPositions.push([i, wqy]);     // if queen above or below, [any, same]
    threatPositions.push([wqx,i]);      // if queen left or right, [same, any]
    threatPositions.push([wqx - i, wqy - i]); // if queen diagonal to top left [-n, -n]
    threatPositions.push([wqx - i,wqy + i]);  // if queen diagonal to top right [-n, +n]
    threatPositions.push([wqx + i,wqy - i]);     // if queen diagonal to bottom left [+n, -n]
    threatPositions.push([wqx + i,wqy + i]);  // if queen diagonal to bottom right [+n, +n]
  }

  // create a filtered array that excludes the whiteQueens current position
  // otherwise the next set of code will always return true
  let filteredThreatPositions = [];
  for (let eachThreatPosition of threatPositions) {
    let [c, d] = eachThreatPosition;
    if (c !== wqx && d !== wqy) {
      filteredThreatPositions.push([c, d]);
    }
  }

  // check if the blackQueen is on any of the valid queen threat positions
  for (let eachThreatPosition of filteredThreatPositions) {
    let [e, f] = eachThreatPosition;
    if (e === bqx && f === bqy) {
      return true;
    }
  }
  return false;
};

// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// true

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

// // [
// //   [1, 0, 0, 0, 0, 0, 0, 0],
// //   [0, 0, 0, 0, 0, 0, 0, 0],
// //   [0, 0, 0, 0, 0, 0, 0, 0],
// //   [0, 0, 0, 0, 0, 0, 0, 0],
// //   [0, 0, 0, 0, 0, 0, 0, 0],
// //   [0, 0, 0, 0, 0, 0, 0, 1],
// //   [0, 0, 0, 0, 0, 0, 0, 0],
// //   [0, 0, 0, 0, 0, 0, 0, 0]
// // ]
// // false




