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
  const limit = x + 4 < board.length ? x + 4 : board.length;
  for (let i = x; i < limit; i++) {
    if (board[i][y] === player) {
      cnt++;
    }
    direction === 'right' ? y++ : y--;
  }
  return cnt;
};

const checkDiagWin = (x, y, board, player) => {
  const downLeft = checkDiagDown(x, y, board, player, 'left');
  const downRight = checkDiagDown(x,y, board, player, 'right');
  const downWin = downLeft === 4 || downRight === 4;

  const upLeft = checkDiagUp(x, y, board, player, 'left');
  const upRight = checkDiagUp(x, y, board, player, 'right');
  const upWin = upLeft === 4 || upRight === 4;
  const leftCombo = downRight + upLeft === 5;
  const rightCombo = downLeft + upRight === 5;

  return downWin || upWin || leftCombo || rightCombo ;
};

const checkVerticalDown = (x, y, board, player) => {
  let cnt = 0;
  const limit = x + 4 <= board.length - 1 ? x + 4 : board.length;
  for (let i = x; i < limit; i++) {
    if (board[i][y] === player) {
      cnt++;
    }
  }
  return cnt;
};

const checkVerticalWin = (x, y, board, player) => {
  return checkVerticalDown(x, y, board, player) === 4;
};

const checkHorizontal = (x, y, board, player, direction) => {
  const row = board[x];
  let cnt = 0;
  if (direction === 'left') {
    for (let i = y; i >= 0; i--) {
      if(row[i] === player) {
        cnt++;
      } else {
        break;
      }
    }
  } else {
    for (let i = y; i < row.length; i++) {
      if(row[i] === player) {
        cnt++;
      } else {
        break;
      }
    }
  }
  return cnt;
};


const checkHorizontalWin = (x, y, board, player) => {
  const left = checkHorizontal(x, y, board, player, 'left');
  const right = checkHorizontal(x, y, board, player, 'right');
  return left === 4 || right === 4 || left + right === 5;
};

const isValidMove = (x, y, board) => (
  board[x][y] === 0 && (parseInt(x) === board.length -1 || board[parseInt(x) + 1][y] !== 0)
);

const checkWin = (x, y, board, player) => {
  return (
    checkHorizontalWin(x, y, board, player) ||
    checkVerticalWin(x, y, board, player) ||
    checkDiagWin(x, y, board, player)
  );
}

export {
checkVerticalDown,
checkHorizontal,
checkDiagDown,
checkDiagUp,
checkDiagWin,
checkVerticalWin,
checkHorizontalWin,
isValidMove,
checkWin,
};