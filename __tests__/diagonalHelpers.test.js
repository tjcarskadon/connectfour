import { checkDiagUp, checkDiagDown } from '../helpers/helpers.js';
import boards from '../helpers/mockBoardData.js';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter() });

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
    it('Should return 4 if there are 3 matching tokens down and to the left', () => {
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
    expect(downRight).toBe(2);
  });
});