import React from "react";

const GameStatus = ({ status, onReset }) => {
  return (
    <div className="game-status">
      <div className="status">{status}</div>
      <button className="reset-button" onClick={onReset}>
        New Game
      </button>
    </div>
  );
};

export default GameStatus;
