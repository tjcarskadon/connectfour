import React from 'react';
import PropTypes from 'prop-types';
import { GameBoardContext } from '../../Pages/Game.jsx'
import {
  Frame,
  GameWrapper,
  Hole,
  ResetButton,
  Row,
  Slot,
  Token,
  Winner,
} from './GameBoard.css.js';

const buildRow = (i, handleClick, board) => {

  return [...Array(7).keys()].map((val, j) => {
    let bgColor = 'cornflowerblue';
    let showMe = false;
    if (board[i][j] === 1) {
      bgColor = 'black';
      showMe = true;
    }
    if (board[i][j] === 2) {
      bgColor = 'red';
      showMe = true;
    }
    const top = `-${i * 100}px`;
   return (
     <div key={j}>
        <Token animate={showMe} top={top} bgColor={bgColor} />
        <Hole onClick={handleClick} data-xy={[i,j]} bgColor={bgColor} />
     </div>
    )
  });
};

const buildSlotRow = (handleClick) => (
  [...Array(7).keys()].map((val, j) => <Slot key={j} onClick={handleClick} data-xy={[-1, j]} />)
);

const buildBoard = (handleClick, board) => (
  [...Array(6).keys()].map((val, i) => (
    <Row key={i}> {buildRow(i, handleClick, board)} </Row>
  ))
);

const GameBoard = () => (
  <GameBoardContext.Consumer>
    { ({handleClick, board, winner, resetGame }) => (
        <GameWrapper>
          { winner
            ? <Winner>
                Congratulations {winner} you win!!!
                <ResetButton onClick={resetGame} >
                  Reset Board
                </ ResetButton>
              </Winner>
            : null
          }
          <Frame>
            <Row>
              { winner ? null : buildSlotRow(handleClick)}
            </Row>
            {buildBoard(handleClick, board)}
          </ Frame>
        </ GameWrapper>
    )}
  </GameBoardContext.Consumer>
);

// GameBoard.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   board: PropTypes.array.isRequired,
//   winner: PropTypes.string.isRequired,
//   resetGame: PropTypes.func.isRequired,
// }


export default GameBoard;