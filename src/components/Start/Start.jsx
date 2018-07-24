import React from 'react';
import { StartButton, StartWrapper, PlayerNameInput, StartMsg } from './Start.css.js';


const Start = (props) => {
  const {
    player,
    handleChange,
    buttonText,
    handleSaveName,
    tempName,
  } = props

  return (
    <StartWrapper>
      <StartMsg>
        Welcome to Connect Four <br />
        Player {player === 1 ? 'one' : 'two'} please enter your name player
      </StartMsg>
      <PlayerNameInput onChange={handleChange} placeholder={tempName} />
      <StartButton onClick={handleSaveName} >
        { buttonText }
      </StartButton>
    </StartWrapper>
  )
};

export default Start;