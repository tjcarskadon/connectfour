import styled from 'styled-components';

const StartWrapper = styled.div`
  margin: 10% auto;
  text-align: center;
`;

const StartMsg = styled.div`
  font-size: 20px;
  font-family: Source Sans Pro;
`;

const PlayerNameInput = styled.input`
  border-radius: 3px;
  height: 20px;
  border: 1px solid;
  margin-top: 10px;
  padding-left: 5px;
  width: 150px;
`;

const StartButton = styled.div`
  font-family: Source Sans Pro;
  text-align: center;
  background-color: black;
  border-radius: 3px;
  width: 100px;
  height: 30px;
  margin: 10px auto;
  border: 1px solid;
  color: white;
  box-sizing: border-box;
  padding: 3px 0;
`;


export { StartButton, StartWrapper, PlayerNameInput, StartMsg }