import { checkHorizontal } from '../helpers/helpers.js';
import boards from '../helpers/mockBoardData.js';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter() });


describe('Horizontal Helpers', () => {
  // Right
  it('Should return 0 when there are no matches on the horizontal to the right', () => {
    const rightCount = checkHorizontal(3, 3, boards.b1, 1, 'right');
    expect(rightCount).toBe(0);
  });

  it('Should return 2 if there are 2 matching tokens in the next 4 rows to the right', () => {
    const rightCount = checkHorizontal(0, 3, boards.b2, 1, 'right');
    expect(rightCount).toBe(2);
  });

  it('Should return 4 if there are 4 matching tokens in the next 4 rows to the right ', () => {
    const rightCount = checkHorizontal(1, 3, boards.b2, 2, 'right');
    expect(rightCount).toBe(4);
  });

  it('Should return 3 if there are 3 matching and one non matching tokens', () => {
    const rightCount = checkHorizontal(2, 1, boards.b2, 2, 'right');
    expect(rightCount).toBe(3);
  });

  // Left
  it('Should return 0 when there are no matches on the horizontal to the left', () => {
    const leftCount = checkHorizontal(4, 3, boards.b1, 1, 'left');
    expect(leftCount).toBe(0);
  });

  it('Should return 2 if there are 2 matching tokens in the next 4 cols left', () => {
    const leftCount = checkHorizontal(3, 3, boards.b2, 1, 'left');
    expect(leftCount).toBe(2);
  });

  it('Should return 4 if there are 4 matching tokens in the next 4 spots to the left ', () => {
    const leftCount = checkHorizontal(1, 6, boards.b2, 2, 'left');
    expect(leftCount).toBe(4);
  });

  it('Should return 3 if there are 3 matching and one non matching tokens', () => {
    const leftCount = checkHorizontal(2, 3, boards.b2, 2, 'left');
    expect(leftCount).toBe(3);
  });
});
