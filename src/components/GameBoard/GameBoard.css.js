import styled, { keyframes } from 'styled-components';

const keyFrameTest = (props) => keyframes`
  0% {
    top: ${(props) => props.top ? props.top : '100px'}
    /* top: 100px; */
  }
  100% {
    top: 800px;
  }
`
const GameWrapper = styled.div`
  width: 765px;
  height: 800px;
  position: fixed;
  z-index: 1;
  background-color: cornflowerblue;
  padding-top: 10px;
`;

const Frame = styled.div`
  width: 735px;
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
  background-color: papayawhip;
  height: 100px;
  width: 100px;
  margin-top: -100px;
  margin-left: 7px;
  ${(props) => props.animate ? `animation: ${keyFrameTest(props)} 3s ease-in-out 0s` : null};
  ${(props) => props.showMe ? 'visibility: visible' : 'visibility: hidden'};
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

export { Frame, GameWrapper, Hole, Row, Slot, Token, Winner };