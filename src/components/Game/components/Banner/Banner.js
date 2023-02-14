import { GAME_STATE } from "../../../../constants";

const Banner = ({ gamePhase, answer }) => {
  return (
    <>
      {gamePhase === GAME_STATE.win && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        </div>
      )}
      {gamePhase === GAME_STATE.loose && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
};

export default Banner;
