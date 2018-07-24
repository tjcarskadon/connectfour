import React, { Component } from 'react';
import GameBoard from '../components/GameBoard/GameBoard.jsx';
import { isValidMove, checkWin } from '../../helpers/helpers.js';


class Game extends Component {
  constructor() {
    super();
    this.state = {
      board: [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
      ],
      activePlayer: 1,
      moveCount: 0,
    }
  }
  handleClick = (e) => {
    const { board, activePlayer, moveCount } = this.state;
    const nextPlayer = activePlayer === 1 ? 2 : 1;
    const [ x, y ] = e.target.dataset.xy.split(',');
    let i = parseInt(x) === -1 ? 0 : x;

    while (i < board.length - 1) {
      if (isValidMove(i, y, board)) {
        break;
      }
      i++;
    }
    if (isValidMove(i, y, board)) {
      board[i][y] = activePlayer;

      if (checkWin(i, y, board, activePlayer)) {
        console.log(`Player ${activePlayer} wins!!!`);
      }
      this.setState({
        board,
        activePlayer: nextPlayer,
        moveCount: moveCount + 1,
      });
    }
  }

  render () {
    return (
      <GameBoard handleClick={this.handleClick} board={this.state.board} />
    );

  }
}

export default Game;