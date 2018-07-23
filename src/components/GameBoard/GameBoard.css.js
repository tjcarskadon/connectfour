import styled from 'styled-components';

const GameWrapper = styled.div`
  width: 765px;
  height: 700px;
  background-color: cornflowerblue;
  padding-top: 10px;
`;

const Frame = styled.div`
  width: 735px;
  height: 662px;
  background-color: yellow;
  margin: 20px auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Hole = styled.div`
  border-radius: 50%;
  background-color: cornflowerblue;
  height: 100px;
  width: 100px;
  margin: 5px;
`;

export { Frame, GameWrapper, Hole, Row };