import { zip } from "../node_modules/rxjs";

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

const checkHorizontalWin = (x, y, board, player) => {
  const left = checkHorizontalLeft(x, y, board, player);
  const right = checkHorizontalRight(x, y, board, player);

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
checkVerticalUp,
checkVerticalDown,
checkHorizontalLeft,
checkHorizontalRight,
checkDiagDown,
checkDiagUp,
checkDiagWin,
checkVerticalWin,
checkHorizontalWin,
isValidMove,
checkWin,
};