import React from 'react';
import { shallow } from 'enzyme';
import {
  checkHorizontalLeft,
  checkHorizontalRight ,
  checkVerticalUp,
  checkVerticalDown,
  checkDiagUp,
  checkDiagDown,
} from '../helpers/helpers.js';
import boards from '../helpers/mockBoardData.js';

// After getting sick of fucking with the setup for this I am adding this here
// TODO (tj): Clean me the fuck up before submitting and figure out why this sucks so badly
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter() });

describe('Horizontal Helpers', () => {
  // Right
  it('Should return 0 when there are no matches on the horizontal to the right', () => {
    const rightCount = checkHorizontalRight(3, 3, boards.b1, 1);
    expect(rightCount).toBe(0);
  });

  it('Should return 2 if there are 2 matching tokens in the next 4 rows to the right', () => {
    const rightCount = checkHorizontalRight(0, 3, boards.b2, 1);
    expect(rightCount).toBe(2);
  });

  it('Should return 4 if there are 4 matching tokens in the next 4 rows to the right ', () => {
    const rightCount = checkHorizontalRight(1, 3, boards.b2, 2);
    expect(rightCount).toBe(4);
  });

  it('Should return 3 if there are 3 matching tokens to the right and one non matching in the next 4', () => {
    const rightCount = checkHorizontalRight(2, 1, boards.b2, 2);
    expect(rightCount).toBe(3);
  });

  // Left
  it('Should return 0 when there are no matches on the horizontal to the left', () => {
    const leftCount = checkHorizontalLeft(4, 3, boards.b1, 1);
    expect(leftCount).toBe(0);
  });

  it('Should return 2 if there are 2 matching tokens in the next 4 cols left', () => {
    const leftCount = checkHorizontalLeft(3, 3, boards.b2, 1);
    expect(leftCount).toBe(2);
  });

  it('Should return 4 if there are 4 matching tokens in the next 4 spots to the left ', () => {
    const leftCount = checkHorizontalLeft(1, 6, boards.b2, 2);
    expect(leftCount).toBe(4);
  });

  it('Should return 3 if there are 3 matching tokens to the left and one non matching in the next 4', () => {
    const leftCount = checkHorizontalLeft(2, 3, boards.b2, 2);
    expect(leftCount).toBe(3);
  });
});

describe('Vertical Helpers', () => {
  // Up
  it('Should return 0 when no matches going up', () => {
    const upCount = checkVerticalUp(3, 3, boards.b1);
    expect(upCount).toBe(0);
  });

  it('Should return 2 if the correct player matches 2 above', () => {
    const upCount = checkVerticalUp(3, 0, boards.b3, 1);
    expect(upCount).toBe(2);
  });

  it('It should return 4 if the correct player matches 4 above', () => {
    const upCount = checkVerticalUp(5, 5, boards.b3, 2);
    expect(upCount).toBe(4);
  });

  it('Should return 3 if there are 3 matching tokens up', () => {
    const upCount = checkVerticalUp(4, 5, boards.b3, 2);
    expect(upCount).toBe(3);
  });

  it('Should return correct if there are less then 4 rows above the x', () =>{
    const upCount = checkVerticalUp(1, 0, boards.b2, 1);
    expect(upCount).toBe(2);
  });

  // Down
  it('Should return 0 when there are no matching tokens down', () => {
    const downCount = checkVerticalDown(3, 3, boards.b1);
    expect(downCount).toBe(0);
  });

  it('Should return 2 if there are 2 matching tokens going down', () => {
    const downCount = checkVerticalDown(2, 0, boards.b3, 1);
    expect(downCount).toBe(2);
  });

  it('Should return 4 if there are 4 matching tokens going down', () => {
    const downCount = checkVerticalDown(1, 4, boards.b3, 2);
    expect(downCount).toBe(4);
  });

  it('Should return the correct number if we are at the end of the board', () => {
    const downCount = checkVerticalDown(4, 4, boards.b3, 2);
    expect(downCount).toBe(2);
  });

  it('Should return 3 if there are 3 matching tokens to the right and one non matching in the next 4', () => {
    const downCount = checkVerticalDown(0, 3, boards.b3, 2);
    expect(downCount).toBe(3);
  });
});

describe('Diagonal Helpers', () => {
  // Up left
  it('Should return 2 if there are 2 matching tokens up and to the left', () => {
    const upLeft = checkDiagUp(2, 3, boards.b4, 1, 'left');
    expect(upLeft).toBe(2);
  });
  it('Should not recognize the wrong players pieces', () => {
    const upLeft = checkDiagUp(4, 6, boards.b4, 2, 'left');
    expect(upLeft).toBe(4);
  });

  it('Should not go out of bounds up and left', () => {
    const upLeft = checkDiagUp(1, 2, boards.b4, 1, 'left');
    expect(upLeft).toBe(1);
  });

  // Up Right
  it('Should return the correct count on the upper right diagonal', () => {
    const upRight = checkDiagUp(3, 2, boards.b4, 1, 'right');
    expect(upRight).toBe(3);
  });

  it('Should not recognize the wrong players pieces', () => {
    const upRight = checkDiagUp(3, 2, boards.b4, 1, 'right');
    expect(upRight).toBe(3);
  });

  it('Should not go out of bounds up and right', () => {
    const upLeft = checkDiagUp(1, 4, boards.b4, 1, 'right');
    expect(upLeft).toBe(1);
  });

  //Down Left
    it('Should return 3 if there are 3 matching tokens down and to the left', () => {
      const downLeft = checkDiagDown(1, 4, boards.b4, 1, 'left');
      expect(downLeft).toBe(3);
    });

    it('Should not recognize the wrong players pieces', () => {
      const downLeft = checkDiagDown(1, 4, boards.b4, 1, 'left');
      expect(downLeft).toBe(3);
    });

    it('Should not go out of bounds down and left', () => {
      const downLeft = checkDiagDown(1, 2, boards.b4, 1, 'left');
      expect(downLeft).toBe(3);
    });


  // Down right
  it('Should return 4 if there are 4 matching tokens down and to the right', () => {
    const downRight = checkDiagDown(1, 3, boards.b4, 2, 'right');
    expect(downRight).toBe(4);
  });

  it('Should not recognize the wrong players pieces', () => {
    const downRight = checkDiagDown(3, 0, boards.b4, 1, 'right');
    expect(downRight).toBe(1);
  });

  it('Should not go out of bounds down and right', () => {
    const downRight = checkDiagDown(3, 5, boards.b4, 2, 'right');
    expect(downRight).toBe(1);
  });
});

