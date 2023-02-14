import Guess from "./Guess/Guess";
import { range } from "../../../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../../../constants";
import { GUESS_IDS } from "../../Game";

const GuessResults = ({ guessList }) => {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED, 1).map((index) => (
        <Guess wordIndex={index} key={GUESS_IDS[index].wordId} guess={guessList[index]} />
      ))}
    </div>
  );
};

export default GuessResults;
