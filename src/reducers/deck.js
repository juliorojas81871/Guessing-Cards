import { DECK,DECK_DRAW } from '../actions/types'

import fetchStates from './fetchStates';

//when the website open, everything will be false since you not playing a game
const DEFAULT_DECK = {
    deck_id: '',
    remaining: '',
    fetchStates: '',
    message: '', 
    cards: ''
};

const deckReducer = (state = DEFAULT_DECK, action) => {
    let remaining, deck_id, cards;
    //make it so program can switch one set without changing the other
    switch(action.type){
        case DECK.FETCH_SUCCESS:
            ({ remaining, deck_id } = action);
            remaining = action.remaining;
            deck_id = action.deck_id;
            return { ...state, remaining, deck_id };
        case DECK.FETCH_ERROR:
            return { ...state, message: action.message, fetchState: fetchStates.error};
        case DECK_DRAW.FETCH_SUCCESS:
            ({ cards, remaining } = action);
            return { ...state, cards, remaining, fetchState: fetchStates.success };
        case DECK_DRAW.FETCH_ERROR:
            return { ...state, message: action.message, fetchState: fetchStates.error };
        default:
            return state;
    }
};

export default deckReducer;