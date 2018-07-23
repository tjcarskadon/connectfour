// Helpers file for building the game logic prior to actually writing any ui code

const checkDiagUp = (x, y, board, player, direction) => {
  let cnt = 0;
  const limit = x >= 4 ? x - 4 : 0;
  for (let i = x; i >= limit; i--) {
    if (board[i][y] === player) {
      cnt++;
    }
    direction === 'right' ? y++ : y--;
  }
  return cnt;
};

const checkDiagDown = (x, y, board, player, direction) => {
  let cnt = 0;
  for (let i = x; i <= 6 - x; i++) {
    if (board[i][y] === player) {
      cnt++;
    }
    direction === 'right' ? y++ : y--;
  }
  return cnt;
};

const checkDiag = () => {};

const checkVerticalUp = (x, y, board, player) => {
  let cnt = 0;
  const limit = x >= 4 ? x - 4 : 0;
  for (let i = x; i >= limit; i--) {
    if (board[i][y] === player) {
      cnt++;
    }
  }
  return cnt;
};

const checkVerticalDown = (x, y, board, player) => {
  let cnt = 0;
  const limit = (x + 4) <= board.length - 1 ? x + 4 : board.length;
  for (let i = x; i < limit; i++) {
    if (board[i][y] === player) {
      cnt++;
    }
  }
  return cnt;
};
const checkVertical = () => {};

const checkHorizontalLeft = (x, y, board, player) => {
  const row = board[x].slice(0, ++y);
  return row.reduceRight((acc, val) => {
    if(val === player) {
      acc++;
    }
    return acc;
  }, 0);

};

const checkHorizontalRight = (x, y, board, player) => {
  const row = board[x].slice(y);
  return row.reduce((acc, val) => {
    if(val === player) {
      acc++;
    }
    return acc;
  }, 0);
}


const checkHorizontal = () => {};

export {
checkVerticalUp,
checkVerticalDown,
checkHorizontalLeft,
checkHorizontalRight,
checkDiagDown,
checkDiagUp,
};