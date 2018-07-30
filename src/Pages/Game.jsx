import React, { Component, createContext } from 'react';
import GameBoard from '../components/GameBoard/GameBoard.jsx';
import Start from '../components/Start/Start.jsx';
import { isValidMove, checkWin } from '../../helpers/helpers.js';

// One plan might be to create a Game context and just pass down everything that is needed to each level
// But that has a funny smell to me so what if we look at each component that is nested and pass down the
// parts of state that only they care about
// if I do that it makes a strong argument for moving the GameBoard helper methods in to the
// GameBoard component then I don't need to pass them around as explictly .... is that better?

const GameBoardContext = createContext();
const StartContext = createContext();

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
    // const { activeGame, activePlayer, board, buttonText, winner } = this.state;
    const gameBoardProps = {
        handleClick: this.handleClick,
        board: this.state.board,
        resetGame: this.resetGame,
    };

    const startProps = {
      buttonText: this.state.buttonText,
      activePlayer: this.state.activePlayer,
      handleChange: this.handleChange,
      handleSaveName: this.handleSaveName,
    }
    if (this.state.activeGame) {
      return (<GameBoardContext.Provider value={gameBoardProps} >
                 <GameBoard />
              </GameBoardContext.Provider>
      );
    }
    return (
      <StartContext.Provider value={startProps} >
        <Start />
      </StartContext.Provider>
    );
  }
}

export default Game;
export { GameBoardContext, StartContext }