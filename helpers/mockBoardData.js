const b1 = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
];
const b2 = [
  [1,0,0,1,1,0,0],
  [1,0,1,2,2,2,2],
  [0,2,2,2,1,0,0],
  [0,2,1,1,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
];
const b3 = [
  [0,0,0,2,0,0,0],
  [2,0,0,2,2,0,0],
  [1,0,0,2,2,2,0],
  [1,0,0,1,2,2,0],
  [0,0,0,0,2,2,0],
  [0,0,0,0,2,2,0],
];
const b4 = [
  [0,0,0,0,0,2,0],
  [0,0,1,2,1,0,0],
  [0,1,0,1,2,0,0],
  [1,0,1,0,0,2,0],
  [0,2,0,0,2,0,2],
  [0,0,0,2,0,0,0],
];

const hWin = [
  [0,0,0,0,0,0,0],
  [2,2,2,2,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,1,1,1,1],
  [0,0,0,0,0,0,0],
  [0,2,2,2,2,0,0],
];

const vWin = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [1,0,1,0,0,0,0],
  [1,0,1,0,0,0,0],
  [1,0,2,0,0,0,0],
  [1,0,1,0,0,0,0],
];

const dWin = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,1,0,1,0,1,0],
  [0,0,1,0,2,0,0],
  [0,1,0,1,0,2,0],
  [1,0,1,0,1,0,2],
];
const boards = {
  b1,
  b2,
  b3,
  b4,
  hWin,
  vWin,
  dWin,
};

export default boards;