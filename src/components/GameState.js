import React from "react";
import { connect } from "react-redux";

//added a suffix to prevent other JavaScript webapp to overwrite my local storage
const correctGuessRecordKey = 'CORRECT-GUESSES-RECORD-roj117'

const checkRecord = correctGuesses => {
    const record = Number(localStorage.getItem(correctGuessRecordKey));
    if (correctGuesses > record){
        localStorage.setItem(correctGuessRecordKey, correctGuesses);
        return { record: correctGuesses, isNewRecord: true };
    }
    return{ record, isNewRecord: false };
};

const GameState = ({ remaining, correctGuesses }) => {
    const guessText = correctGuesses === 1 ? 'guess' : 'guesses';
    const { record, isNewRecord } = checkRecord(correctGuesses);
    const recordLabel = isNewRecord ? '🎆 New Record!!!' : 'Record';
    return(
        <div>
            <h3> {recordLabel}: {record} </h3>
            <p> {remaining} cards remaining </p>
            <p> {correctGuesses} correct {guessText}</p>
        </div>
    )

}

export default connect(
    ({
        deck: { remaining },
        gameState: { correctGuesses }
    }) => ({ remaining, correctGuesses })
) (GameState);