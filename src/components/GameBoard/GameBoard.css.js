import styled, { keyframes } from 'styled-components';
import { StartButton } from '../Start/Start.css.js';

const keyFrameTest = (props) => {
  const t = props.top;
  return keyframes`
    0% {
      top: ${t};
      visibility: visible;
    }
    100% {
      top: 100px;
      visibility: hidden;
    }
  `
}

const GameWrapper = styled.div`
  width: 780px;
  height: 753px;
  position: fixed;
  z-index: 1;
  background-color: cornflowerblue;
  padding-top: 10px;
`;

const Frame = styled.div`
  width: 763px;
  height: 662px;
  position: relative;
  z-index: 4;
  background-color: yellow;
  margin: 75px auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Hole = styled.div`
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
  height: 100px;
  width: 100px;
  margin: 5px;
  transition: background-color 200ms ease-in .95s;
`;

const Slot = styled.div`
  background-color: ${(props) => props.bgColor};
  height: 100px;
  width: 100px;
  margin-top: -100px;
`;

const Token = styled.div`
  border-radius: 50%;
  position: relative;
  background-color: ${(props) => props.bgColor};
  height: 100px;
  width: 100px;
  top: 0;
  margin-top: -100px;
  margin-left: 7px;
  ${(props) => props.animate ? `animation: ${keyFrameTest(props)} 1s linear 0s` : null};
  ${(props) => props.showMe ? 'visibility: visible' : 'visibility: hidden'};
`
const newToken = styled(Token)`
`
const Winner = styled.div`
  font-family: Source Sans Pro;
  font-size: 30px;
  font-weight: 400;
  width: 100%;
  text-align: center;
  padding-top: 20px;
  margin-bottom: -58px;
`
const ResetButton = styled(StartButton)`
  margin-left: 10px;
  display: inline;
  font-size: 14px;
  padding: 10px;
  border: none
`

export { Frame, GameWrapper, Hole, Row, ResetButton, Slot, Token, Winner };