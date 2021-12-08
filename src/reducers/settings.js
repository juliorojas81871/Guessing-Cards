import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED } from '../actions/types'

//when the website open, everything will be false since you not playing a game
const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false
}

const settingsReducer = (state = DEFAULT_SETTINGS, action) => {
    switch(action.type){
        case SET_GAME_STARTED:
            return{ ...state, gameStarted: action.gameStarted };
        case SET_INSTRUCTIONS_EXPANDED:
            return{ ...state, instructionsExpanded: action.instructionsExpanded };
        default:
            return state;
    }
};

export default settingsReducer;