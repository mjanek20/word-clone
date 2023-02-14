import { useState } from "react";

const UserInput = ({ addGuess, disabled }) => {
  const [wordInput, setWordInput] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log(wordInput);
        addGuess(wordInput);
        setWordInput("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <></>
      <input
        disabled={disabled}
        value={wordInput}
        onChange={(event) => {
          setWordInput(event.target.value.toUpperCase());
        }}
        id="guess-input"
        type="text"
        pattern=".{5,5}"
        maxLength="5"
        required
        title="Has to be 5 characters"
      />
    </form>
  );
};

export default UserInput;
