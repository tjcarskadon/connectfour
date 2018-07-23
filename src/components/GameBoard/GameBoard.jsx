import React from 'react';
import { Frame, GameWrapper, Hole, Row} from './GameBoard.css.js';

const buildRow = (i) => [...Array(7).keys()].map((val, j) => <Hole key={j} data-xy={[i,j]} />);
const buildBoard = () => [...Array(6).keys()].map((val, i) => <Row key={i}> {buildRow(i)} </Row>);

const GameBoard = () => {
  return (
    <GameWrapper>
      <Frame>
        {buildBoard()}
      </ Frame>
    </ GameWrapper>

  );
}

export default GameBoard;