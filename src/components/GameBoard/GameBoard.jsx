import React from 'react';
import { Frame, GameWrapper, Hole, Row, Slot } from './GameBoard.css.js';

const buildRow = (i, handleClick, board) => {

  return [...Array(7).keys()].map((val, j) => {
    let bgColor = 'cornflowerblue';
    if (board[i][j] === 1) {
      bgColor = 'black';
    }
    if (board[i][j] === 2) {
      bgColor = 'red';
    }
   return <Hole key={j} onClick={handleClick} data-xy={[i,j]} bgColor={bgColor} />

  });
};

const buildSlotRow = (handleClick) => (
  [...Array(7).keys()].map((val, j) => (
    <Slot key={j} onClick={handleClick} data-xy={[-1, j]} />
  ))
);

const buildBoard = (handleClick, board) => (
  [...Array(6).keys()].map((val, i) => <Row key={i}> {buildRow(i, handleClick, board)} </Row>)
);

const GameBoard = ({handleClick, board}) => {
  return (
    <GameWrapper>
      <Frame>
        <Row>
          {buildSlotRow(handleClick)}
        </Row>
        {buildBoard(handleClick, board)}
      </ Frame>
    </ GameWrapper>
  );
}

export default GameBoard;