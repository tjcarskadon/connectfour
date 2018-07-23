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

    if (isValidMove(x, y, board)) {
      board[x][y] = activePlayer;

      if (checkWin(x, y, board, activePlayer)) {
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