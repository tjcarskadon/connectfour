import React from 'react';
import { shallow } from 'enzyme';
import { checkVerticalDown, } from '../helpers/helpers.js';
import boards from '../helpers/mockBoardData.js';

// After getting sick of fucking with the setup for this I am adding this here
// TODO (tj): Clean me the fuck up before submitting and figure out why this sucks so badly
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter() });

describe('Vertical Helpers', () => {

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