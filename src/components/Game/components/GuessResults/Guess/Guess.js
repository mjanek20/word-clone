import { GUESS_IDS } from "../../../Game";

const Guess = ({ guess, wordIndex }) => {
  const emptyLetter = { letter: "", status: "" };
  const localGuess = guess
    ? guess
    : [emptyLetter, emptyLetter, emptyLetter, emptyLetter, emptyLetter];

  return (
    <>
      <p className="guess">
        {[...localGuess].map((letter, index) => (
          <span
            key={GUESS_IDS[wordIndex].letterIds[index]}
            className={`cell ${letter.status}`}
          >
            {letter.letter}
          </span>
        ))}
      </p>
    </>
  );
};

export default Guess;
