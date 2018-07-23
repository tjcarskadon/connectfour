import React, { Component } from 'react';
import GameBoard from '../components/GameBoard/GameBoard.jsx';


class Game extends Component {
  constructor() {
    super();
  }

  render () {
    return (
      <GameBoard />
    );

  }
}

export default Game;