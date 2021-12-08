import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED } from './types';

// once the game start gameStarted will switch to true allowing user to play the game
export const startGame = () => {
  return { type: SET_GAME_STARTED, gameStarted: true };
};

// cancelGame will switch gameStarted back to false since user end 
export const cancelGame = () => {
  return { type: SET_GAME_STARTED, gameStarted: false };
};

export const expandInstructions = () => {
  return { type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: true };
};

// will close game instruction 
export const collapseInstructions = () => {
  return { type: SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: false };
};




