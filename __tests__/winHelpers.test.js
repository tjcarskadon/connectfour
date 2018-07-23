import React from 'react';
import { shallow } from 'enzyme';
import { checkDiagWin, checkVerticalWin, checkHorizontalWin } from '../helpers/helpers.js';
import boards from '../helpers/mockBoardData.js';

// After getting sick of fucking with the setup for this I am adding this here
// TODO (tj): Clean me the fuck up before submitting and figure out why this sucks so badly
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter() });



describe('Win Checks', () =>{
  it('Should win with 4 of the correct player going down', () => {
    expect(checkVerticalWin(2, 0, boards.vWin, 1)).toBe(true);
  });
  it('Should not win with <4 of the correct player going down', () => {
    expect(checkVerticalWin(2, 1, boards.vWin, 1)).toBe(false);
  });

  it('Should win with 4 of the correct player going left', () => {
    expect(checkHorizontalWin(1, 3, boards.hWin, 2)).toBe(true);
  });
  it('Should win with 4 of the correct player going right', () => {
    expect(checkHorizontalWin(3, 3, boards.hWin, 1)).toBe(true);
  });
  it('Should win with 2 of the correct player going left and 2 right', () => {
    expect(checkHorizontalWin(5, 2, boards.hWin, 2)).toBe(true);
  });

  it('Should win with 4 of the correct player diag up and to the left', () => {
    expect(checkDiagWin(5, 4, boards.dWin, 1)).toBe(true);
  });
  it('Should win with 4 of the correct player diag up and to the right', () => {
    expect(checkDiagWin(5, 0, boards.dWin, 1)).toBe(true);
  });
  it('Should win with 4 of the correct player diag down and to the left', () => {
    expect(checkDiagWin(2, 3, boards.dWin, 1)).toBe(true);
  });
  it('Should win with 4 of the correct player diag down and to the right', () => {
    expect(checkDiagWin(2, 1, boards.dWin, 1)).toBe(true);
  });

  it('Should not win with <4 of the correct player diag up and to the left', () => {
    expect(checkDiagWin(2, 2, boards.dWin, 1)).toBe(false);
  });
  it('Should not win with <4 of the correct player diag up and to the right', () => {
    expect(checkDiagWin(5, 2, boards.dWin, 1)).toBe(false);
  });
  it('Should not win with <4 of the correct player diag down and to the left', () => {
    expect(checkDiagWin(2, 5, boards.dWin, 1)).toBe(false);
  });
  it('Should not win with <4 of the correct player diag down and to the right', () => {
    expect(checkDiagWin(3, 4, boards.dWin, 1)).toBe(false);
  });


});
