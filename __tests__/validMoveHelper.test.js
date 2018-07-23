import { isValidMove } from '../helpers/helpers.js';
import boards from '../helpers/mockBoardData.js';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter() });


describe('Test valid moves', () => {
  it('Should only let you place a piece in an empty location', () => {
    expect(isValidMove(5, 0, boards.moveCheck)).toBe(true);
  });
  it('Should let you place a piece above another piece', () => {
    expect(isValidMove(3, 3, boards.moveCheck)).toBe(true);
    expect(isValidMove(2, 1, boards.moveCheck)).toBe(true);
  });
  it('Should not let you place a piece in the middle of a column', () => {
    expect(isValidMove(0, 1, boards.moveCheck)).toBe(false);
    expect(isValidMove(3, 4, boards.moveCheck)).toBe(false);
  });
});