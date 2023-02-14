import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import UserInput from "./components/UserInput/UserInput";
import GuessResults from "./components/GuessResults/GuessResults";
import { GAME_STATE, NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Banner from "./components/Banner/Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export const GUESS_IDS = [];
for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
  GUESS_IDS.push({ wordId: crypto.randomUUID(), letterIds: [] });
  for (let j = 0; j < 5; j++) {
    GUESS_IDS[i].letterIds.push(crypto.randomUUID());
  }
}

function Game() {
  const [guessList, setGuessList] = useState([]);
  const [gamePhase, setGamePhase] = useState(GAME_STATE.on);

  const addGuessWord = (guessWord) => {
    if (guessWord === answer) {
      setGamePhase(GAME_STATE.win);
      return;
    }
    const guessResult = checkGuess(guessWord, answer);
    setGuessList((prev) => [...prev, guessResult]);
    if (guessList.length >= 5) {
      setGamePhase(GAME_STATE.loose);
    }
  };

  return (
    <>
      <GuessResults guessList={guessList} />
      <UserInput
        disabled={gamePhase !== GAME_STATE.on}
        addGuess={addGuessWord}
      />
      <Banner answer={answer} gamePhase={gamePhase} />
    </>
  );
}

export default Game;
