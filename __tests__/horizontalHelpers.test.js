import React from 'react';
import { shallow } from 'enzyme';
import { checkHorizontalLeft, checkHorizontalRight } from '../helpers/helpers.js';
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
