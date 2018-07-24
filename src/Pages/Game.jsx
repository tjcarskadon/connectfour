import React, { Component } from 'react';
import GameBoard from '../components/GameBoard/GameBoard.jsx';
import Start from '../components/Start/Start.jsx';
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
      activeGame: false,
      player1: '',
      player2: '',
      buttonText: 'Save',
      winner: null,
      dropToken: false
    }
  }
  handleClick = (e) => {
    const { board, activePlayer } = this.state;
    const nextPlayer = activePlayer === 1 ? 2 : 1;
    const [ x, y ] = e.target.dataset.xy.split(',');
    let i = parseInt(x) === -1 ? 0 : x;

    while (i < board.length - 1) {
      if (isValidMove(i, y, board)) {
        break;
      }
      i++;
    }
    if (isValidMove(i, y, board) && !this.state.winner) {
      board[i][y] = activePlayer;

      if (checkWin(i, y, board, activePlayer)) {
        const winnerName = activePlayer === 1 ? this.state.player1 : this.state.player2;
        this.setState({winner: winnerName})
      }
      this.setState({
        board,
        activePlayer: nextPlayer,
        dropToken: true,
      });
    }
  }

  resetGame = () => {
    const board = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
    ];

    this.setState({
      board,
      winner: null,
      activePlayer: 1,
    });

  }

  handleSaveName = (e) => {
    e.target.previousSibling.value = '';
    const nextPlayer = this.state.activePlayer === 1 ? 2 : 1;

    this.setState({
      activePlayer: nextPlayer,
      buttonText: 'Start',
    });

    if (this.state.activePlayer === 2) {
      this.setState({activeGame: true});
    }
  }

  handleChange = (e) => {
    if (this.state.activePlayer === 1) {
      this.setState({player1: e.target.value});
    } else {
      this.setState({player2: e.target.value});
    }
  }

  render () {
    const { activeGame, activePlayer, board, buttonText, winner, dropToken } = this.state;
    if (activeGame) {
      return <GameBoard
                handleClick={this.handleClick}
                board={board}
                winner={winner}
                resetGame={this.resetGame}
                dropToken={dropToken}
              />
    }
    return <Start
              buttonText={buttonText}
              player={activePlayer}
              handleChange={this.handleChange}
              handleSaveName={this.handleSaveName}
            />
  }
}

export default Game;