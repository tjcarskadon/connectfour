import React from 'react';
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

const buildRow = (i, handleClick, board, dropToken) => {

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

const buildSlotRow = (handleClick, dropToken) => (
  [...Array(7).keys()].map((val, j) => <Slot key={j} onClick={handleClick} data-xy={[-1, j]} />)
);

const buildBoard = (handleClick, board, dropToken) => (
  [...Array(6).keys()].map((val, i) => (
    <Row key={i}> {buildRow(i, handleClick, board, dropToken)} </Row>
  ))
);

const GameBoard = ({handleClick, board, winner, resetGame, dropToken}) => {
  return (
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
          { winner ? null : buildSlotRow(handleClick, dropToken)}
        </Row>
        {buildBoard(handleClick, board)}
      </ Frame>
    </ GameWrapper>
  );
}

export default GameBoard;