import React from 'react';
import { StartContext } from '../../Pages/Game.jsx';
import { StartButton, StartWrapper, PlayerNameInput, StartMsg } from './Start.css.js';


const Start = () => (
  <StartContext.Consumer >
    { ({ player, handleChange, buttonText, handleSaveName, tempName, }) => (
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
    }
  </StartContext.Consumer>
);

export default Start;